import React from "react";
import PropTypes from "prop-types";

function UserCard(props) {
  const { user } = props;

  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={user.profileImageUrl} alt={user.name} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.name}</p>
              <p className="subtitle is-6">@{user.screenName}</p>
            </div>
          </div>

          <div className="content">
            <p className="is-capitalized">{user.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    screenName: PropTypes.string,
    profileImageUrl: PropTypes.string,
    location: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  user: {
    name: "",
    screenName: "",
    profileImageUrl: "",
    location: "",
  },
};

export default UserCard;
