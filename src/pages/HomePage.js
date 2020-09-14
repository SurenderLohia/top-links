import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import VisibileTweets from "../features/tweets/VisibleTweets";
import Loader from "../components/Loader";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  const { user, tweets } = state;
  return {
    user,
    isAuthenticated: tweets.isAuthenticated,
    isTweetsLoading: tweets.isLoading,
  };
};

function HomePage(props) {
  const { getUserData, getTweets, isAuthenticated, isTweetsLoading } = props;
  useEffect(() => {
    getUserData();
    getTweets();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isTweetsLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <VisibileTweets />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
