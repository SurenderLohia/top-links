import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function Tweet(props) {
  const { tweet } = props;
  const formattedTime = moment(tweet.created_at).format("h:mm a - D MMM YYYY");
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={tweet.user.profileImageUrl} alt={tweet.user.name} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{tweet.user.name}</p>
              <p className="subtitle is-6">@{tweet.user.screenName}</p>
            </div>
          </div>

          <div className="content">
            {tweet.text}
            {/* Todo: add hashtags */}
            <br />
            {tweet.entity_url.map((item, index) => (
              <p key={index}>
                <a href={item.url}>{item.url}</a>
              </p>
            ))}
            <p className="is-capitalized">{tweet.user.location}</p>
            <time>{formattedTime}</time>
          </div>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    text: PropTypes.string,
    entity_url: PropTypes.array,
    created_at: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      screenName: PropTypes.string,
      profileImageUrl: PropTypes.string,
      location: PropTypes.string,
    }),
  }),
};

Tweet.defaultProps = {
  tweet: {
    text: "default text",
    entity_url: [],
    created_at: "",
    user: {
      name: "",
      screenName: "",
      profileImageUrl: "",
      location: "",
    },
  },
};

export default Tweet;
