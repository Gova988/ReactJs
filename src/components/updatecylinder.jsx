import React, { Component } from "react";
import axios from "axios";

class UpdateCylinder extends React.Component {
  state = {
    cylinder: {
    
      type: "",
      weight: "",
      strapColor: "",
      price: "",
    },
  };
  componentDidMount() {
    const dataUrl = `http://localhost:8080/cylinder/getSingleCylinder/${this.props.match.params.cylinderId}`;
    axios.get(dataUrl).then((response) => {
        console.log(response.data);
        this.setState({
          ...this.state.cylinder,
            cylinder : response.data
        })
    })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    this.setState({
        cylinder: {
            ...this.state.cylinder,
            [event.target.name]: event.target.value,
        },
    });
};
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit");
    // Send post request to rest api
    const dataUrl = `http://localhost:8080/cylinder/updateCylinder/${this.props.match.params.cylinderId}`;
        axios
            .put(dataUrl, this.state.cylinder)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Update Cylinder details " +
                        this.state.cylinder.type +
                        " successfully !!!"
                );
                this.props.history.push("/cylinders");
            })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { type,weight,strapColor,price } = this.state.cylinder;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
         
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
            
              value={type}
              name="type"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              weight
            </label>
            <input
              type="text"
              className="form-control"
              id="weight"
             
              value={weight}
              name="weight"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="strapColor" className="form-label">
              strapColor
            </label>
            <input
              type="text"
              className="form-control"
              id="strapColor"
              
              value={strapColor}
              name="strapColor"
              onChange={this.handleChange}
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              
              value={price}
              name="price"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCylinder;