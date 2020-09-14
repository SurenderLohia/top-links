import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    name: state.user.data.name,
  };
};

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

export default connect(mapStateToProps)(Hero);
