import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";

class ChallengeList extends Component {
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
    getChallenges().then((res) => this.setState({ challenges: res.data }));
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <h1>Challenges below</h1>
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
              <li>{c._id}</li>
              <li>{c.category}</li>
              <li>{c.goal}</li>
              <li>{c.shortDescription}</li>
            </ul>
          </>
        ))}
      </div>
    );
  }
}
ChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(ChallengeList);
