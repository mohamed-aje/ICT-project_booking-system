import React, { useState, Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import SettingsPage from "./components/pages/SettingsPage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [user, setUser] = useState(null);

  /*   useEffect(() => {
    console.log("user found: " + user);
  }, []); */

  return (
    <>
      <Router>
        <Navbar sendUser={setUser} />
        <div>
          <Routes>
            {user ? (
              <>
                <Route
                  exact
                  path="/dashboard/:username/overview"
                  element={<DashboardPage />}
                ></Route>
                <Route
                  path="/dashboard/:username/settings"
                  element={<SettingsPage />}
                ></Route>
              </>
            ) : (
              <Route path="/" exact element={<LoginPage />}></Route>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
