import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home"><Home /></Route>
          <Route path="/login">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route path="/register">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
          </Route>
          <Route path="/admin" name="Admin"> <MasterLayout /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
