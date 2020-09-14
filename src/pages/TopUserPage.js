import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  const { tweets } = state;
  return {
    user: state.user.data,
    topUser: tweets.data.topUser,
    isAuthenticated: tweets.isAuthenticated,
    isTweetsLoading: tweets.isLoading,
  };
};

function TopUserPage(props) {
  const { getUserData, getTweets, isAuthenticated, isTweetsLoading } = props;
  const { topUser } = props;
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
      <h2 className="is-size-3">Top User</h2>
      <UserCard user={topUser} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUserPage);
