import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../views/Login"
import Register from "../views/Register"
import Recovery from "../views/Recovery"
import DashboardLayout from "../views/Layout";
import CantidadComponent from "../views/dashboard/cantidad";
import GraficoComponent from "../views/dashboard/grafico";
import PerfilComponent from "../views/dashboard/perfil";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" exact component={Register} />
        <Route path="/recuperar" exact component={Recovery} />
        <DashboardLayout>
          <>
            <Route path="/dashboard/cantidad-duchas" exact component={CantidadComponent} />
            <Route path="/dashboard/cantidad-dispositivos" exact component={CantidadComponent} />
            <Route path="/dashboard/agua-ahorrada" exact component={GraficoComponent} />
            <Route path="/dashboard/agua-utilizada" exact component={GraficoComponent} />
            <Route path="/dashboard/temperatura" exact component={GraficoComponent} />
            <Route path="/dashboard/mi-perfil" exact component={PerfilComponent} />
          </>
        </DashboardLayout>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
