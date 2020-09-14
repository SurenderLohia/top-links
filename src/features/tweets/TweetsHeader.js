import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setLocationFilter, setSearchQuery } from "./tweetsSlice";

const getLocations = function (tweets) {
  const locations = tweets.map((tweet) => {
    return tweet.user.location;
  });

  return [...new Set(locations)];
};

const mapDispatchToProps = {
  setLocationFilter,
  setSearchQuery,
};

const mapStateToProps = (state) => {
  const { tweets } = state;
  return {
    locations: getLocations(tweets.items),
  };
};

function TweetsHeader(props) {
  const { locations, setLocationFilter, setSearchQuery } = props;

  const onFilterByLocationChange = function (e) {
    setLocationFilter({ locationFilter: e.target.value });
  };

  const onFilterByTweetTextChange = function (e) {
    setSearchQuery({ searchQuery: e.target.value });
  };

  return (
    <div className="columns mb-5">
      <div className="column is-2">
        <div className="field">
          <label htmlFor="filter-by-location">Filter by Location</label> <br />
          <div className="select">
            <select
              name="filter-by-location"
              id="filter-by-location"
              onChange={onFilterByLocationChange}
            >
              <option value="">All</option>
              {locations.map(
                (location, index) =>
                  location && (
                    <option value={location} key={index}>
                      {location}
                    </option>
                  )
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="column is-2">
        <div className="field">
          <label htmlFor="filter-by-tweet-text">Filter by Tweet text</label>{" "}
          <br />
          <input
            id="filter-by-tweet-text"
            className="input"
            type="text"
            name="filter-by-tweet-text"
            onChange={onFilterByTweetTextChange}
          />
        </div>
      </div>
    </div>
  );
}

TweetsHeader.propTypes = {
  locations: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsHeader);
