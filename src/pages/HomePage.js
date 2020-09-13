import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";
import { getTweets } from "../features/tweets/tweetsSlice";

import Nav from "../components/Nav";

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
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Top Links</h1>
            <h2 class="subtitle">Welcome {name}!</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
