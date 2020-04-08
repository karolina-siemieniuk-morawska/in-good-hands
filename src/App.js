import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import PageNotFound from "./components/404/index";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/logout" component={} /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
