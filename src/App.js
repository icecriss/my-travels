// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <br />
        <Travel
          image="https://cdn.pixabay.com/photo/2014/12/15/17/43/chicago-bean-569412_960_720.jpg"
          destination="Chicago"
          country="USA"
          distance="7 175 km"
        />
        <Travel
          image="https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-363244_960_720.jpg"
          destination="Sydney"
          country="Australia"
          distance="16 881 km"
        />
      </div>
    );
  }
}

export default App;
