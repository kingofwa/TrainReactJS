import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, BrowserRouter, Switch } from
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
                        <Switch>
                            {routes.filter(route => route.component).map((route, idx) => {
                                return (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                    >
                                        <route.component />
                                    </Route>
                                )
                            })}
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;