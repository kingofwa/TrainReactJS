import axios from "axios";
import React, { useState } from "react";
import NavBar from "../../../layouts/frontend/Navbar";

function Register() {
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        e.presist();
        setRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
    }


    const RegisterSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password
        }

        axios.post(`http://localhost:8000/api/register`, data).then(res => {
            
        });
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
                                        <input type="" className="form-control" name="name" value={registerInput.name} onChange={handleInput} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputPassword1">Email ID</label>
                                        <input type="password" className="form-control" name="email" value={registerInput.email} onChange={handleInput} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="email" className="form-control" name="password" value={registerInput.password} onChange={handleInput} />
                                    </div>
                                    <button type="button" className="btn btn-primary mt-2">Register</button>
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