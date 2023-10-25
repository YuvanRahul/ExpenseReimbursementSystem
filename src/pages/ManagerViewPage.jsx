import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ManagerViewPage = () => {


    const [employeeid, setEmployeeid] = useState('');
    const [expenses, setExpense] = useState([]);
    const [status,setStatus] = useState();
    const fetchData = (id) => {
    
        axios
            .get("http://localhost:9000/api/manager/pending/" + employeeid)
            .then((response) => {
                setExpense(response.data)
                
                console.log(response.data)
            })
            .catch((error) => console.log(error));
    };

    const changeEmployeeid = (e) => {
        setEmployeeid(e.target.value)

    }

    const handleget = (e) =>{
        
        console.log(employeeid)
        fetchData(employeeid)
        e.preventDefault()
    }

    const handleApprove = (expenseid) => {
        console.log(expenseid)
        axios
            .put("http://localhost:9000/api/manager/manage/" + expenseid + "/approved")
            .then((response) => {
                setStatus(response.data)
                console.log(response.data)
                fetchData('')
            })
            .catch((error) => console.log(error));
    }

    const handleDeny = (expenseid) => {
        console.log(expenseid)
        
        axios
            .put("http://localhost:9000/api/manager/manage/" + expenseid + "/denied")
            .then((response) => {
                setStatus(response.data)
                console.log(response.data)
                fetchData('')
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        
        fetchData('');
    }, []);

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h2>Pending Requests List</h2>
                </div>
                <form>
                    <label>Employee ID: </label>
                    <input type="number" onChange={changeEmployeeid} ></input>
                    <button  className="btn btn-primary" onClick={handleget} >Get</button>
                </form>
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
                                <th>Actions</th>
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
                                    <td>
                                        <input type="button" value="Deny" className="btn btn-danger"  onClick={() => { handleDeny(expense.expenseId) }} />
                                        <button className="btn btn-success" onClick={() => { handleApprove(expense.expenseId) }}>Approve</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default ManagerViewPage;