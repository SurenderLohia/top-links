import React from "react";

function LoginPage() {
  const onLogin = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
  return (
    <div>
      <h1>Login page 2</h1>
      <button onClick={onLogin}>Login via Twitter</button>
    </div>
  );
}

export default LoginPage;
