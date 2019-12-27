import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { isLogin } from "./utils";

// ROUTES COMPONENT
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

// PAGES COMPONENT
import Homepage from "./components/Homepage";
import RegisterPage from "./components/RegisterPage/index.js";
import LoginPage from "./components/LoginPage/index";
import Dashboard from "./components/Dashboard/";
import Loading from "react-loading";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function isLogged() {
      const newUser = await isLogin();
      console.log("the new user is ", newUser);
      setUser(newUser);
      setLoading(false);
    }

    isLogged();
  }, []);

  return loading ? (
    <Loading
      type={"spin"}
      color={"#000"}
      style={{
        margin: "20% auto 0 auto",
        height: "60px",
        width: "60px"
      }}
    />
  ) : (
    <div className="App">
      <ThemeContext.Provider value={user}>
        <Router>
          <Navbar />
          <Switch>
            <PublicRoute
              path="/"
              restricted={true}
              component={Homepage}
              exact
            />
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
