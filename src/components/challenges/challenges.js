import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";

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


    // const { user } = this.props.auth;
    return (
      <div>
        <h1>Challenges below</h1>
        {this.state.challenges.map((c) => (
          <>
            <ul>
            <Card>
              <Card.Header as="h4">{c.shortDescription}</Card.Header>
              <Card.Body>
                <Card.Title>           
                      <li>{c.name}</li>
                  </Card.Title>
                <Card.Text>
                  <li>Category: {c.category}</li>
                  <li>Goal: {c.goal}</li>
                </Card.Text>
                <Link
                      to={{
                        pathname: `/challenge`,
                        state: {
                          _id: c._id,
                        },
                      }}
                    >
                      <Button variant="primary">Go To Challenge</Button>
                    </Link>
              </Card.Body>
            </Card>
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
