import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import Nav from "../components/Nav";
import Tweet from "../features/tweets/Tweet";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    tweets: state.tweets.items,
  };
};

function HomePage(props) {
  const { getUserData, getTweets, tweets } = props;
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
        <div className="columns">
          <div className="column is-one-quarter">
            <Tweet tweet={tweets[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
