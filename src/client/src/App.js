import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import RegisterForm from "./components/RegisterForm/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
