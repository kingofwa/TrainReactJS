import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';

function NavBar() {
    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }
    var Authbuttons = '';
    if (!localStorage.getItem('auth_token')) {
        Authbuttons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    } else {
        Authbuttons = (
            <li className="nav-item">
                <Link onClick={logoutSubmit} className="nav-link btn btn-warning btn-sm text-white">Logout</Link>
            </li>
        );
    }
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/colection">Colection</Link>
                        </li>
                        {Authbuttons}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;