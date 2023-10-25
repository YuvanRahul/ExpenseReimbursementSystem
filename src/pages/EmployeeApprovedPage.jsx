import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useID } from "../IDContext";

const EmployeeApprovedPage = () => {

    // const { id } = useParams()

    const { id } = useID();
    const [expenses, setExpense] = useState([]);
    const fetchData = () => {
        axios
            .get("http://localhost:9000/api/employee/" + id + "/approved")
            .then((response) => {
                setExpense(response.data)
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
                    <h2>Approved Requests List</h2>
                </div>

                <div className="col-md-6 text-right">
                    <Link to="/employee/dashboard" className="btn btn-primary">Back to Employee Dashboard</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>ExpenseId</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense, index) => (
                                <tr key={index}>
                                    <td>{expense.expenseId}</td>
                                    <td>{expense.name}</td>
                                    <td>{expense.description}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default EmployeeApprovedPage;