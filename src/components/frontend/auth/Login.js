import axios from "axios";
import React, { useState } from "react";
import NavBar from "../../../layouts/frontend/Navbar";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [loginInput, Setlogin] = useState({
        email: '',
        password: '',
        error_list: [],
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
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.username);
                    swal("Success" ,res.data.message,"success");
                    history.push('/'); 
                } else if (res.data.status === 401) {
                    swal("Warning" ,res.data.message,"warning");
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
                                        <input type="email" className="form-control" name="email"  value={loginInput.email} onChange={handleInput} />
                                        <span className="small">{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label >Password</label>
                                        <input type="password" className="form-control" name="password" value={loginInput.password} onChange={handleInput} />
                                        <span className="small">{loginInput.error_list.password}</span>
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