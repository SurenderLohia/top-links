import React from "react";
import { Redirect } from "react-router-dom";

import signInWithTwitterBtn from "../images/sign-in-with-twitter-btn.png";

function LoginPage() {
  const onLogin = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="is-size-4 mb-4">Top Links Login</h1>
        <div className="box">
          <div className="box-content">
            <button className="btn-reset" onClick={onLogin}>
              <img src={signInWithTwitterBtn} alt="Sign in with Twitter" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
