import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-3-md"></div>
                <div className="col-6-md">
                    <div class="jumbotron">
                        <h1 class="display-4">Expense Reimbursement System!!!</h1>

                        <hr class="my-4" />
                        <p></p>
                    </div>
                    <Link to="/employee/login" className="btn btn-primary">Employee Login</Link>
                    <hr></hr>
                    <Link to="/manager/login" className="btn btn-primary">Manager Login</Link>

                </div>
                <div className="col-3-md"></div>
            </div>
        </div>
    )
}
export default HomePage;