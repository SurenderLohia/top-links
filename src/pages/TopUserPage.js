import React from "react";
import { connect } from "react-redux";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import UserCard from "../components/UserCard";

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    topUser: state.tweets.data.topUser,
  };
};

function TopUserPage(props) {
  const { name } = props.user;
  const { topUser } = props;
  return (
    <div>
      <Nav />
      <Hero name={name} />
      <div className="container">
        <h2 className="is-size-3">Top User</h2>
        <UserCard user={topUser} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(TopUserPage);
