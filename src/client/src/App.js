import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// ROUTES COMPONENT
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

// PAGES COMPONENT
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
          <PublicRoute path="/" restricted={true} component={Homepage} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PublicRoute
            path="/login"
            restricted={true}
            component={LoginPage}
            exact
          />
          <PublicRoute
            path="/register"
            restricted={true}
            component={RegisterPage}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
