import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const onLogout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>

          <Link className="navbar-item" to="/top-user">
            Top User
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" onClick={onLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
