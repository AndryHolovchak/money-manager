import React from "react";
import { Route, Switch } from "react-router";
import { Chart } from "./pages/chart/Chart";
import { Home } from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chart" component={Chart} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default App;
