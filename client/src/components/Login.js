import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "570276307364-clhut1u9fu40j8edf60srs864d8icive.apps.googleusercontent.com";

const Login = ({ setUser }) => {
  //const myStorage = window.localStorage;
  const [loggedIn, setLoggedIn] = useState(false);
  //const [showlogoutButton, setShowlogoutButton] = useState(false);
  const navigate = useNavigate();

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    let user = res.profileObj;
    setUser(user);
    if (window.location.pathname == "/") {
      navigate("/dashboard/overview");
    }
    setLoggedIn(true);
    //myStorage.setItem("loggedIn", true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    //alert("You have been logged out successfully");
    console.clear();
    setUser("");
    navigate("/");
    setLoggedIn(false);
    //myStorage.setItem("loggedIn", false);
  };

  return (
    <div>
      {!loggedIn ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Log in"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="Log Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      )}
    </div>
  );
};
export default Login;
