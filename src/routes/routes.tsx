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
import DevicesList from "../views/dashboard/devices/devices";
import DeviceInfo from "../views/dashboard/devices/data";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/register" exact component={Register} />
        <PublicRoute path="/recovery" exact component={Recovery} />
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
              path="/dashboard/profile"
              exact
              component={PerfilComponent}
            />

            <PrivateRoute
              path="/dashboard/devices"
              exact
              component={DevicesList}
            />
            <PrivateRoute
              exact
              path="/dashboard/MyDevices/me/:id"
              component={() => <DeviceInfo />}
            />
          </>
        </DashboardLayout>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
