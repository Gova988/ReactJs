import React, { Component } from "react";
import axios from "axios";

class UpdateCylinder extends React.Component {
  state = {
    cylinder: {
      cylinderid: "",
      type: "",
      weight: "",
      strapColor: "",
      price: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/cylinder/cylinderid/${this.props.match.params.cylinderid}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ cylinder: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
 
    const cylinder = { ...this.state.cylinder};

    // update local student object with values entered by user
    cylinder[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ cylinder: cylinder });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/cylinder/${this.props.match.params.cylinderid}`,
        this.state.cylinder
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated cylinder " + this.state.cylinder.cylinderid + " successfully!"
        );
        this.props.history.push("/cylindere");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { cylinderid,type,weight,strapColor,price } = this.state.cylinder;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="cylinderid" className="form-label">
              cylinderid
            </label>
            <input
              type="text"
              className="form-control"
              id="cylinderid"
              aria-describedby="cylinderid"
              value={cylinderid}
              name="cylinderid"
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
              aria-describedby=""
              value={strapColor}
              name="strapColor"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              aria-describedby=""
              value={type}
              name="type"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select text-center"
            aria-label="Default select example"
            value={price}
            name="price"
            onChange={this.handleChange}
          >
            <option selected>price</option>
            <option value="admin">Admin</option>
            <option value="cylinder">cylinder</option>
          </select>
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