import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Main from "src/pages/Main";
import Home from "../pages/Home";
import Route from "./Route";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } title="Home" />
      <Route path="/Main" component={ Main } title="Main" />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
