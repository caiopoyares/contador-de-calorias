import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../../utils/";
import Loading from "react-loading";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
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
    <Loading type={"spin"} color={"#fff"} height={"20%"} width={"20%"} />
  ) : (
    <Route
      {...rest}
      render={props =>
        logged && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
