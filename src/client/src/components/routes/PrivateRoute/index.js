import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../../utils";
import Loading from "react-loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged, setLogged] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function authorize() {
      const authenticated = await isLogin();
      setLogged(authenticated);
      setLoading(false);
    }
    authorize();
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
    <Route
      {...rest}
      render={props =>
        logged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
