import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Cylinder extends React.Component {

    constructor(props){
        super(props)
        this.state={
            cylinders : [],
            errorMsg : ""
        };
    }

    componentDidMount(){
        console.log("componentDidMount()");
        const dataUrl = `http://localhost:8080/cylinder/viewCylinders`;
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                cylinders : response.data
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMsg : error.message
            });
        })
    }

    deleteCylinder = (cylinderid) => {
        const dataUrl = `http://localhost:8080/cylinder/deleteCylinder`;
        axios.delete(dataUrl).then((response) => {
            const cylinder = this.state.cylinders.filter((c) => c.cylinderid !==cylinderid);
            this.setState({
                ...this.state,
                cylinders : cylinder
            });
            alert(response.data.username + " delete successfully !!!");
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMsg : error.message
            });
        })
    }

    render() { 
        let { cylinders } = this.state;
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link
                                    to="/cylinder/add"
                                    className="btn btn-success mt-3 btn-md float-end mb-3"
                                >
                                    <i class="fas fa-user"/>&nbsp;&nbsp;
                                    Add Cylinder
                                </Link>
                                <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-warning">
                                    <thead className="table table-warning">
                                        <tr>
                                            <th>cylinderid</th>
                                            <th>type</th>
                                            <th>weight</th>
                                            <th>strapColor</th>
                                            <th>price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.cylinders.map((s) => {
                                                return (
                                                    <tr>
                                                        <td>{s.cylinderid}</td>
                                                        <td>
                                                            {s.type}
                                                        </td>
                                                        <td>
                                                            {
                                                                s.weight
                                                            }
                                                        </td>
                                                        <td>
                                                            {s.strapColor}
                                                        </td>
                                                        <td>
                                                            {s.price}
                                                        </td>
                                                      
                                                        <td>
                                                            <button className="btn btn-sm btn-outline-success">
                                                                <i class="fas fa-edit" />
                                                                &nbsp;&nbsp;
                                                                Update
                                                            </button>

                                                            <button
                                                                className="btn btn-sm btn-outline-danger"
                                                                onClick={() =>
                                                                    this.deleteCylinder(
                                                                        s.id
                                                                    )
                                                                }
                                                            >
                                                                <i class="fas fa-trash" />
                                                                &nbsp;&nbsp;
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Cylinder;
