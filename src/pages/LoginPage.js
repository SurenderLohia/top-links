import React from "react";

import signInWithTwitterBtn from "../images/sign-in-with-twitter-btn.png";

function LoginPage() {
  const onLogin = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
  return (
    <div className="login-container">
      <div class="login-box">
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
