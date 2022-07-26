import React from "react";
import NavBar from "../../../layouts/frontend/Navbar";

function Login() {
    return (
        <div>
            <NavBar />
            < div className="container py-5">
                < div className="row justify-content-center">
                    < div className="col-md-6">
                        < div className="card">
                            < div className="card-header text-center">LOGIN</div>
                            < div className="card-body">
                                <form>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputPassword1">Email ID</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email ID" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                                    </div>
                                    <button type="button" className="btn btn-primary mt-2">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;