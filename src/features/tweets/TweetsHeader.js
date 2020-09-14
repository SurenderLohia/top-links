import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const getLocations = function (tweets) {
  const locations = tweets.map((tweet) => {
    return tweet.user.location;
  });

  return [...new Set(locations)];
};

const mapStateToProps = (state) => {
  const { tweets } = state;
  return {
    locations: getLocations(tweets.items),
  };
};

function TweetsHeader(props) {
  const { locations } = props;

  return (
    <div className="columns mb-5">
      <div className="column is-2">
        <div className="field">
          <label>Filter by Location</label> <br />
          <div className="select">
            <select>
              <option>Select Location</option>
              {locations.map(
                (location, index) =>
                  location && <option key={index}>{location}</option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="column is-2">
        <div className="field">
          <label>Filter by Tweet text</label> <br />
          <input className="input" type="text" name="filter-by-tweet-text" />
        </div>
      </div>
    </div>
  );
}

TweetsHeader.propTypes = {
  locations: PropTypes.array,
};

export default connect(mapStateToProps)(TweetsHeader);
