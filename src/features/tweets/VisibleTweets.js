import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Tweets from "./Tweets";
import TweetsHeader from "./TweetsHeader";

const getVisibleTweets = (Tweets, locationFilter, searchQuery) => {
  if (!locationFilter && !searchQuery) {
    return Tweets;
  } else {
    if (locationFilter && searchQuery) {
      const filtered = Tweets.filter((tweet) => {
        return (
          tweet.user.location.toLowerCase() === locationFilter.toLowerCase()
        );
      });

      return filtered.filter((tweet) =>
        tweet.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (locationFilter && !searchQuery) {
      return Tweets.filter((tweet) => {
        return (
          tweet.user.location.toLowerCase() === locationFilter.toLowerCase()
        );
      });
    }
    if (searchQuery && !locationFilter) {
      return Tweets.filter((tweet) =>
        tweet.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }
};

const mapStateToProps = (state) => {
  const { tweets } = state;
  const { locationFilter, searchQuery } = tweets;
  return {
    tweets: getVisibleTweets(tweets.items, locationFilter, searchQuery),
  };
};

function VisibileTweets(props) {
  const { tweets } = props;
  return (
    <div>
      <TweetsHeader />
      <Tweets tweets={tweets} />
    </div>
  );
}

VisibileTweets.propTypes = {
  tweets: PropTypes.array,
};

export default connect(mapStateToProps)(VisibileTweets);
