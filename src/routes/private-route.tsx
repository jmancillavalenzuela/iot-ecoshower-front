import { Route, Redirect } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function PrivateRoute({ component: Component, ...rest }: any) {
  const { user } = useUserAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
