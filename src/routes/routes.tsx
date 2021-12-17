import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../views/Login"
import Register from "../views/Register"
import Recovery from "../views/Recovery"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" exact component={Register} />
        <Route path="/recuperar" exact component={Recovery} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
