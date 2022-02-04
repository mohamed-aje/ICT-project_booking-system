import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import SettingsPage from "./components/pages/SettingsPage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [user, setUser] = useState();
  console.log("hello from app.js: " + user);
  return (
    <>
      <Router>
        <Navbar setUser={setUser} />
        <div>
          <Routes>
            <Route path="/" exact element={<LoginPage />}></Route>
            <Route
              path="/dashboard/overview/:username"
              element={<DashboardPage />}
            ></Route>
            <Route
              path="/settings/:username"
              element={<SettingsPage />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
