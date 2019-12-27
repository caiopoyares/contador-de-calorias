import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../../utils/";
import Loading from "react-loading";
import ThemeContext from "../../../ThemeContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = React.useContext(ThemeContext);

  return false ? (
    <Loading type={"spin"} color={"#fff"} height={"20%"} width={"20%"} />
  ) : (
    <Route
      {...rest}
      render={props =>
        false && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
