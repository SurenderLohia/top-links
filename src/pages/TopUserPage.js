import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import UserCard from "../components/UserCard";

const mapDispatchToProps = {
  getUserData,
  getTweets,
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    topUser: state.tweets.data.topUser,
  };
};

function TopUserPage(props) {
  const { getUserData, getTweets } = props;
  const { topUser } = props;
  useEffect(() => {
    getUserData();
    getTweets();
  }, []);

  return (
    <div className="container">
      <h2 className="is-size-3">Top User</h2>
      <UserCard user={topUser} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUserPage);
