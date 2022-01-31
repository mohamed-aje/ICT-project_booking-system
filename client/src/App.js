import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import Navbar from "./components/navbar/Navbar";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" exact element={<LoginPage />}></Route>
              <Route
                path="/dashboard/overview"
                element={<DashboardPage />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
