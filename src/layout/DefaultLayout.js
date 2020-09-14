import React from "react";
import { Route } from "react-router-dom";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

function DefaultLayout({ children }) {
  return (
    <div>
      <Nav />
      <Hero name="Nazria" />
      <div className="container">{children}</div>
    </div>
  );
}

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DefaultLayout>
          <Component {...matchProps} />
        </DefaultLayout>
      )}
    />
  );
};

export default DefaultLayoutRoute;
