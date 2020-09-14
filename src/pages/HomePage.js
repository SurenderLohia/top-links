import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import Nav from "../components/Nav";
import Tweets from "../features/tweets/Tweets";

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
        <Tweets tweets={tweets} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
