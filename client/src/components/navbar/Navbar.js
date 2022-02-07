import React, { useState, useEffect } from "react";
import Login from "../Login";

const Navbar = ({ sendUser }) => {
  const [user, setUser] = useState(null);
  //const [settingsURL, setSettingsURL] = useState();

  useEffect(() => {
    sendUser(user);
  }, [user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href={user ? `/dashboard/${user.name}/overview/` : null}
        >
          Office desk booking system
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
                        href={user ? `/dashboard/${user.name}/settings` : null}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
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
