import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Table from "./Table";
import Home from "./Home";
import Error from "./Error";
import Navigation from "./Navigation";

class AppControl extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/table" component={Table} />
            <Route path="/missingnumbergame" component={Table} />
            <Route path="/completetablegame" component={Table} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppControl;
