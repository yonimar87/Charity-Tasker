import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getCreatedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class MyChallengeList extends Component {
  constructor() {
    super();
    this.state = {
      challenge: [],
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    getCreatedChallenges(this.props.auth).then((res) =>
      this.setState({ challenge: res.data })
    );
  }

  render() {
    // const { user } = this.props.auth;
    return (
      <div>
        <h1>Challenges below</h1>
        {this.state.challenge.map((c) => (
          <>
            <ul>
              <Card>
                <Card.Header as="h4">
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
                </Card.Header>
                <Card.Text>
                  <li></li>
                  <li>Category: {c.category}</li>
                  <li>Goal: {c.goal} Likes</li>
                  <li>Current Likes: {c.likes}</li>
                  <li>Description: {c.shortDescription}</li>
                </Card.Text>
              </Card>
            </ul>
          </>
        ))}
      </div>
    );
  }
}
MyChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(MyChallengeList);
