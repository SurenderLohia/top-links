import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import TopUserPage from "./pages/TopUserPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/top-user">
            <TopUserPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
