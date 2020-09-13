import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>

          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
