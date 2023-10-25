import { Link } from "react-router-dom";

const EmployeePage = () => {
    return (

        <div className="row">
            <div className="col-3-md"></div>
            <div className="col-6-md">
                <div className="container">
                    <div className="wrapper">
                        <h3>Manager Dashboard</h3>

                        <Link to="/manager/pending/" className="btn btn-primary btn">View Pending Requests</Link><hr />
                        <Link to="/manager/approved" className="btn btn-primary">View Approved Requests</Link><hr />
                        <Link to="/manager/denied" className="btn btn-primary">View Denied Requests</Link><hr />
                        {/* <Link to="/manager/pending/" className="btn btn-primary">View Pending Requests of an Employee</Link><hr /> */}
                        {/* <Link to="/manager/status/" className="btn btn-primary">Manage Requests</Link><hr /> */}
                        <Link to="/manager/employees" className="btn btn-primary">View All Employees </Link>

                    </div>
                    <hr />
                    <Link to="/" className="btn btn-dark">Logout</Link>
                </div>
                <div className="col-3-md"></div>
            </div>
        </div>
    )
}
export default EmployeePage;