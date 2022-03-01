import React, { useState, useEffect } from "react";
import Login from "../Login";

const Navbar = ({ sendUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      console.log(user.email);
      sendUser(user);
    }
  }, [user]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#02305a" }}
    >
      <div className="container-fluid">
        <a
          style={{ height: "60px" }}
          className="navbar-brand"
          href={user ? "/dashboard/overview/" : null}
        >
          <div style={{ height: "70px" }}>
            <img
              style={{ maxHeight: "100%" }}
              src={require("./ORK_logo.JPG")}
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto"></ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href={user ? "/dashboard/profile" : null}
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            ) : null}
            <li>
              <Login setUser={setUser} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
