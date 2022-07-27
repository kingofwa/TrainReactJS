import axios from "axios";
import React, { useState } from "react";
import NavBar from "../../../layouts/frontend/Navbar";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password: '',
        error_list:[],
    });

    const handleInput = (e) => {
        e.persist();
        setRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
    }


    const RegisterSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.username);
                    swal("Success" ,res.data.message,"success");
                    history.push('/');
                } else {
                    setRegisterInput({ ...registerInput, error_list: res.data.validator_errors })
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
                            < div className="card-header text-center">REGISTER</div>
                            < div className="card-body">
                                <form onSubmit={RegisterSubmit}>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="text" className="form-control" name="name" value={registerInput.name} onChange={handleInput} />
                                        <span className="small">{registerInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputPassword1">Email ID</label>
                                        <input type="text" className="form-control" name="email" value={registerInput.email} onChange={handleInput} />
                                        <span className="small">{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" className="form-control" name="password" value={registerInput.password} onChange={handleInput} />
                                        <span className="small">{registerInput.error_list.password}</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;