// src/App.js
import React, { Component } from "react";
import logo from "./toadLogo.ico";
import "./App.css";

// import Travel from "./Travel";
import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <br />
        <Travels />
      </div>
    );
  }
}

export default App;
