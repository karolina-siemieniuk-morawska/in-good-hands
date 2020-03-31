import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import PageNotFound from "./components/404/index";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/donate" component={} />
        <Route exact path="/login" component={} />
        <Route exact path="/register" component={} />
        <Route exact path="/logout" component={} /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
