import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../../utils";
import Loading from "react-loading";
import ThemeContext from "../../../ThemeContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = React.useContext(ThemeContext);

  return false ? (
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
        true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
