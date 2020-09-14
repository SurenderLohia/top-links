import React from "react";
import PropTypes from "prop-types";

import Tweet from "./Tweet";

function Tweets(props) {
  const { tweets } = props;
  return (
    <div className="columns is-multiline">
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array,
};

Tweets.defaultProps = {
  tweets: [],
};

export default Tweets;
