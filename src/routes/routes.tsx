import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Recovery from "../views/Recovery";
import DashboardLayout from "../views/Layout";
import CantidadComponent from "../views/dashboard/cantidad";
import GraficoComponent from "../views/dashboard/grafico";
import PerfilComponent from "../views/dashboard/perfil";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/registro" exact component={Register} />
        <PublicRoute path="/recuperar" exact component={Recovery} />
        <PublicRoute path="/" exact component={Login} />
        <DashboardLayout>
          <>
            <PrivateRoute
              path="/dashboard/cantidad-duchas"
              exact
              component={CantidadComponent}
            />
            <PrivateRoute
              path="/dashboard/cantidad-dispositivos"
              exact
              component={CantidadComponent}
            />
            <PrivateRoute
              path="/dashboard/agua-ahorrada"
              exact
              component={GraficoComponent}
            />
            <PrivateRoute
              path="/dashboard/agua-utilizada"
              exact
              component={GraficoComponent}
            />
            <PrivateRoute
              path="/dashboard/temperatura"
              exact
              component={GraficoComponent}
            />
            <PrivateRoute
              path="/dashboard/mi-perfil"
              exact
              component={PerfilComponent}
            />
          </>
        </DashboardLayout>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
