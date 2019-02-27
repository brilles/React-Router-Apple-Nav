import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import Data from "./data";
import TopNav from "./TopNav";
import SubNav from "./SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };
  }
  render() {
    const data = this.state.data;
    console.log(data.macData);
    return (
      <div className="App">
        <div className="navbar">
          <TopNav />
        </div>
        <Route
          exact
          path="/mac"
          key={data.macData}
          render={props => <SubNav {...props} data={data.macData} />}
        />
        <Route
          exact
          path="/ipad"
          key={data.ipad}
          render={props => <SubNav {...props} data={data.ipadData} />}
        />
        <Route
          exact
          path="/iphone"
          key={data.ipad}
          render={props => <SubNav {...props} data={data.iphoneData} />}
        />
        <Route
          exact
          path="/watch"
          key={data.ipad}
          render={props => <SubNav {...props} data={data.watchData} />}
        />
        <Route
          exact
          path="/tv"
          key={data.ipad}
          render={props => <SubNav {...props} data={data.tvData} />}
        />
        <Route
          exact
          path="/music"
          key={data.ipad}
          render={props => <SubNav {...props} data={data.musicData} />}
        />
      </div>
    );
  }
}

export default App;
