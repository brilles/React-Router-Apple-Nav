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
      macData: Data.macData
    };
  }
  render() {
    const { macData } = this.state;
    return (
      <div className="App">
        <div className="navbar">
          <Home />
        </div>
        <Route
          exact
          path="/mac"
          render={props => <Mac {...props} macData={macData} />}
        />
      </div>
    );
  }
}

export default App;
