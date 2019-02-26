import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import Data from "./data";
import Home from "./Home";
import Mac from "./Mac";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mac: Data
    };
  }
  render() {
    const { mac } = this.state;
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/mac" render={props => <Mac {...props} mac={mac} />} />
      </div>
    );
  }
}

export default App;
