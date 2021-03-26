import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />;
      <Route path="/details/:city"  render= {(props) => <Details {... props}/> } />;
    </Switch>
  );
};

export default Routes;
