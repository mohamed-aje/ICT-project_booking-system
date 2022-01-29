import React, { useState, Component } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
export default App;
