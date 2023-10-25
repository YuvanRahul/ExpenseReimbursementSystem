import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManagerDeniedPage = () => {

  
    const [expenses, setExpense] = useState([]);
    const fetchData = () => {
        axios
            .get("http://localhost:9000/api/manager/denied")
            .then((response) => {
                setExpense(response.data)
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
                    <h2>Denied Requests List</h2>
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
                                <th>ExpenseId</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Employee Id</th>
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
                                    <td>{expense.employeeId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default ManagerDeniedPage;