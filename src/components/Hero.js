import React from "react";

function Hero(props) {
  const { name } = props;
  return (
    <section className="hero is-primary mb-6">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Top Links</h1>
          <h2 className="subtitle">Welcome {name}!</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
