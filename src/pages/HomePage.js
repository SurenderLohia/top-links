import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "../features/user/userSlice";

const mapDispatchToProps = {
  getUserData,
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
  };
};

function HomePage(props) {
  const { getUserData } = props;
  const { name } = props.user;
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>Home page 2</h1>
      <h3>Welcome {name}</h3>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
