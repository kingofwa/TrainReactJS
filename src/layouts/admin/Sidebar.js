import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaAdn, FaHome, FaProfi } from 'react-icons/fa';
import Dashboard from '../../components/admin/Dashbord';
import { Navbar, Nav, TabContainer, NavDropdown } from "react-bootstrap";

const Sidebar = () => {
    return (
        <>
            <Nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link to="/admin/dashbord" className="nav-link">
                            <div className="sb-nav-link-icon"><FaHome /></div>
                            Dashboard
                        </Link>
                        <Link to="/admin/profile" className="nav-link">
                            <div className="sb-nav-link-icon"><FaAdn /></div>
                            Profile
                        </Link>

                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Layouts
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                                <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                            </nav>
                        </div>
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                            Pages
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="login.html">Login</Link>
                                        <Link className="nav-link" to="register.html">Register</Link>
                                        <Link className="nav-link" to="password.html">Forgot Password</Link>
                                    </nav>
                                </div>
                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                    Error
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="401.html">401 Page</Link>
                                        <Link className="nav-link" to="404.html">404 Page</Link>
                                        <Link className="nav-link" to="500.html">500 Page</Link>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div className="sb-sidenav-menu-heading">Addons</div>
                        <Link className="nav-link" to="charts.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                            Charts
                        </Link>
                        <Link className="nav-link" to="tables.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                            Tables
                        </Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </Nav>
        </>
    );
}

export default Sidebar;