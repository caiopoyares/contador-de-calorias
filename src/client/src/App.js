import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";

import Homepage from "./components/Homepage";
import RegisterPage from "./components/RegisterPage/index.js";
import LoginPage from "./components/LoginPage/index";
import Dashboard from "./components/Dashboard/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
