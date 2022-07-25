import React from 'react';
import {BrowserRouter as Router, Routes, Route,Navigate,Link, BrowserRouter} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import { createBrowserHistory } from 'history'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props}/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
