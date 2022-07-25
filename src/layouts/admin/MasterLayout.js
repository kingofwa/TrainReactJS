import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, BrowserRouter } from
    'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../routes/routes';

import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

const MasterLayout = () => {
    return (
        <div className='sb-nav-fixed'>
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <BrowserRouter>
                            {routes.map((route, idx) => {
                                console.log(route);
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            name={route.name}
                                            exact={route.exact}
                                            render={(props) => (
                                                < route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                        </BrowserRouter>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;