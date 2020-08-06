import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getPickedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";

class PickedChallengeList extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
    };

  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    getPickedChallenges(this.props.auth).then((res) =>
      this.setState({ challenges: res.data })
    );
  }
  render() {
    // const { user } = this.props.auth;
    return (
      <div>
        <h1>CHALLENGES TO COMPLETE</h1>
        {this.state.challenges.map((c) => (
          <>
            <ul>
              <Link
                to={{
                  pathname: `/challenge`,
                  state: {
                    _id: c._id,
                  },
                }}
              >
                <li>{c.name}</li>
              </Link>
              <li>{c.category}</li>
              <li>Goal: {c.goal} likes</li>
              <li>{c.shortDescription}</li>
              <li>{c.description}</li>
              <li>Current Likes: {c.likes}</li>
              <li> {c.fulfilledBy_id ? 'Challenge already completed!' : 'Still needs completing....'}
            </li>
            </ul>
          </>
        ))}
      </div>
    );
  }
}
PickedChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(PickedChallengeList);
