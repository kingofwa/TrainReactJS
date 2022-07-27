import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import { createBrowserHistory } from 'history'
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home"><Home /></Route>
          <Route path="/login" name="Login"><Login /></Route>
          <Route path="/register" name="Register"><Register /></Route>

          <Route path="/admin" name="Admin"> <MasterLayout /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
