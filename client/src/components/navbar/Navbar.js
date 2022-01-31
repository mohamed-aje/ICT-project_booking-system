import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Login from "../Login";
import "./Navbar.css";
class Navbar extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Space Booking System</h1>
        <Login />
      </nav>
    );
  }
}
export default Navbar;
