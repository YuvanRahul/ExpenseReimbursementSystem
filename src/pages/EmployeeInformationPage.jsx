import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useID } from "../IDContext";

const EmployeeInformationPage = () => {

    const { id } = useID();
    const [informations, setInformation] = useState([]);
    const fetchData = () => {
        axios
            .get("http://localhost:9000/api/employee/" + id + "/information")
            .then((response) => {
                setInformation([response.data])
                console.log(response.data)
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h2>Employee Profile Page</h2>
                </div>

                <div className="col-md-6 text-right">
                    <Link to="/employee/dashboard" className="btn btn-primary">Back to Employee Dashboard</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <div className="wrapper">

                        {
                            informations.map((information, index) => (
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">{information.name}</h5>
                                        <p class="card-text">Employee Id: {information.employeeId}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Email: {information.email}</li>
                                        <li class="list-group-item">Team: {information.team}</li>
                                        <li class="list-group-item">Location: {information.location}</li>
                                        <li class="list-group-item">Contact: {information.number}</li>
                                    </ul>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );

}
export default EmployeeInformationPage;