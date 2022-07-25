import React from 'react';
import {  Route, BrowserRouter,Switch } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import { createBrowserHistory } from 'history'

// 'render={(props) => <MasterLayout {...props} />}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" name="Admin"  >
            <MasterLayout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
