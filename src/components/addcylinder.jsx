import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Joi } from 'joi-browser';

class AddCylinder extends React.Component {
    state = {
        cylinder: {
            cylinderid: "",
            type: "",
            weight: "",
            strapColor: "",
            price: ""
        },
        errors: {},
        errorMsg: "",
    };
    updateInput = (event) => {
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

       
        const dataUrl = `http://localhost:8080/cylinder/insertCylinders`;
        axios
            .post(dataUrl, this.state.cylinder)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added Cylinder " +
                        this.state.cylinder.cylinderid +
                        " successfully !!!"
                );
                this.props.history.push("/cylinder");
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { cylinder } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.cylinder);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add Cylinder
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="cylinderid"
                                                className="form-label fw-bold text-black"
                                            >
                                                cylinderid
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="cylinderid"
                                                id="cylinderid"
                                                name="cylinderid"
                                                value={cylinder.cylinderid}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.cylinderid}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="type"
                                                className="form-label fw-bold text-black"
                                            >
                                                Type
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="type"
                                                id="type"
                                                name="type"
                                                value={cylinder.type}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.type}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="strapColor"
                                                className="form-label fw-bold text-black"
                                            >
                                                StrapColor
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="strapColor"
                                                id="strapColor"
                                                name="strapColor"
                                                value={cylinder.strapColor}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.strapColor}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="weight"
                                                className="form-label fw-bold text-black"
                                            >
                                                Weight
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="weight"
                                                id="weight"
                                                name="weight"
                                                value={cylinder.weight}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.weight}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="price"
                                                className="form-label fw-bold text-black"
                                            >
                                                Price
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="price"
                                                id="price"
                                                name="price"
                                                value={cylinder.price}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.price}</small>
                                            )}
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-md text-black fw-bold"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AddCylinder;