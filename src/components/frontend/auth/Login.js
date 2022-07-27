import axios from "axios";
import React, { useState } from "react";
import NavBar from "../../../layouts/frontend/Navbar";

function Login() {
    const [loginInput, Setlogin] = useState({
        email: '',
        password: '',
        error_list:[],
    });
    const handleInput = (e) => {
        e.persist();
        Setlogin({ ...loginInput, [e.target.name]: e.target.value });
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`, data).then(res => {
                if (res.data.status === 200) {

                } else {
                    Setlogin({ ...loginInput, error_list: res.data.validator_errors })
                }
            });
        })
    }
    return (
        <div>
            <NavBar />
            < div className="container py-5">
                < div className="row justify-content-center">
                    < div className="col-md-6">
                        < div className="card">
                            < div className="card-header text-center">LOGIN</div>
                            < div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mt-2">
                                        <label >Email ID</label>
                                        <input type="text" className="form-control" value={loginInput.email} onChange={handleInput}  placeholder="Email ID" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label >Password</label>
                                        <input type="password" className="form-control" value={loginInput.password} onChange={handleInput}  placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">Login</button>
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