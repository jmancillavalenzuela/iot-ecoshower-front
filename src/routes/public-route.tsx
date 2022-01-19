import { Route, Redirect } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function PublicRoute({ component: Component, ...rest }: any) {
  const { user } = useUserAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard/mi-perfil" />
        )
      }
    />
  );
}

export default PublicRoute;
