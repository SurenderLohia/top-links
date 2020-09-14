import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

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
    <div className="container">
      <VisibileTweets />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
