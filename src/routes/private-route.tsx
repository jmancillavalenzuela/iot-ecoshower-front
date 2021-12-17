import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }: any) {
  const isLoggedIn = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
