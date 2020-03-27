import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import PageNotFound from "./components/404/index";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
