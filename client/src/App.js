import React, { useState, Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import SettingsPage from "./components/pages/SettingsPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pages/Footer";

const App = () => {
  const [user, setUser] = useState();

  return (
    <>
      <Router>
        <div style={{ height: "100vh" }}>
          <Navbar sendUser={setUser} />
          <Routes>
            {user ? (
              <>
                <Route
                  exact
                  path="/dashboard/overview"
                  element={<DashboardPage user={user} />}
                ></Route>
                <Route
                  exact
                  path="/dashboard/profile"
                  element={<SettingsPage user={user} />}
                ></Route>
              </>
            ) : (
              <Route path="/" exact element={<LoginPage />}></Route>
            )}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};
export default App;
