import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewEmployeesPage = () => {


    const [employees, setEmployee] = useState([]);
    const fetchData = () => {
        axios
            .get("http://localhost:9000/api/manager/employees")
            .then((response) => {
                setEmployee(response.data)
                console.log(response.data)
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h2>Employees List</h2>
                </div>

                <div className="col-md-6 text-right">
                    <Link to="/manager/dashboard" className="btn btn-primary">Back to Manager Dashboard</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Team</th>
                                <th>Location</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.team}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default ViewEmployeesPage;