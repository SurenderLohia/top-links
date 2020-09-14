import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import DefaultLayoutRoute from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TopUserPage from "./pages/TopUserPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <DefaultLayoutRoute path="/home" component={HomePage} />
          <DefaultLayoutRoute path="/top-user" component={TopUserPage} />
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
