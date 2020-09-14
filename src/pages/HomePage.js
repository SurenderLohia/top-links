import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import VisibileTweets from "../features/tweets/VisibleTweets";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: state.tweets.isAuthenticated,
  };
};

function HomePage(props) {
  const { getUserData, getTweets, isAuthenticated } = props;
  useEffect(() => {
    getUserData();
    getTweets();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <VisibileTweets />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
