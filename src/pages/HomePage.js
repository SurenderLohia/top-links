import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import Nav from "../components/Nav";
import VisibileTweets from "../features/tweets/VisibleTweets";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
  };
};

function HomePage(props) {
  const { getUserData, getTweets } = props;
  const { name } = props.user;
  useEffect(() => {
    getUserData();
    getTweets();
  }, []);
  return (
    <div>
      <Nav />
      <section className="hero is-primary mb-6">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Top Links</h1>
            <h2 className="subtitle">Welcome {name}!</h2>
          </div>
        </div>
      </section>
      <div className="container">
        <VisibileTweets />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
