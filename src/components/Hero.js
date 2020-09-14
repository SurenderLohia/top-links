import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    name: user.data.name,
    isUserLoading: user.isLoading,
  };
};

function Hero(props) {
  const { name, isUserLoading } = props;
  return (
    <section className="hero is-primary mb-6">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Top Links</h1>
          <h2 className="subtitle">
            {isUserLoading ? "Loading..." : `Welcome ${name}`}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default connect(mapStateToProps)(Hero);
