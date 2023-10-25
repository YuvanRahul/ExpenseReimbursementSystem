import { Link } from "react-router-dom";

const EmployeePage = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-3-md"></div>
                <div className="col-6-md">
                    <div className="wrapper">
                        <h3>Employee Dashboard</h3>
                        <Link to="/employee/add" className="btn btn-primary btn-block">Add New Request</Link><hr />
                        <Link to="/employee/pending" className="btn btn-primary btn-block">View Pending Requests</Link><hr />
                        <Link to="/employee/approved/" className="btn btn-primary btn-block">View Approved Requests</Link><hr />
                        <Link to="/employee/denied" className="btn btn-primary btn-block">View Denied Requests</Link><hr />
                        <Link to="/employee/profile" className="btn btn-primary btn-block">View Profile</Link><hr />
                        <Link to="/employee/update" className="btn btn-primary btn-block">Update Information </Link>
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