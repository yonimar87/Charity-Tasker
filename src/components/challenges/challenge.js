import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  getChallenge,
  pickChallenge,
  updateLikes,
  updateStatus,
} from "../../utils/challengesAPI";
import Upload from "./upload.js";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class singleChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: [true],
      fulfilledBy_id: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.incrementMe = this.incrementMe.bind(this);
  }

  handleClick() {
    pickChallenge(this.state.challenge[0]._id, this.props.auth).then((res) =>
      console.log("Updated")
    );
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { _id } = this.props.location.state;
    getChallenge(_id).then((res) => this.setState({ challenge: res.data }));
    if (this.state.challenge !== []) {
      console.log(getChallenge());
    }
  }

  incrementMe = () => {
    const challenges = this.state.challenge.slice(0);
    challenges[0].likes += 1;
    this.setState({
      challenges: challenges,
    });
    updateLikes(this.state.challenge[0]._id, challenges[0].likes);
  };

  challengeComplete = () => {
    const challenges = this.state.challenge.slice(0);
    challenges[0].status = "Completed";
    this.setState({
      challenges: challenges,
    });
    updateStatus(this.state.challenge[0]._id, challenges[0].status);
  };

  render() {
    if (this.state.challenge.length === 0) {
      return null;
    }
    // const { user } = this.props.auth;
    return (
      <div className="container">
        <h3>Challenge Title: {this.state.challenge[0].name}</h3>
        <ul>
          <Card>
            <li className="singleChallengeList">
              <Card.Header>Category</Card.Header>
              <br></br>
              <Card.Text>{this.state.challenge[0].category}</Card.Text>
            </li>
            <li className="singleChallengeList">
              <Card.Header>Description</Card.Header>
              <br></br>
              <Card.Text>{this.state.challenge[0].description}</Card.Text>
            </li>
            <li className="singleChallengeList">
              <Card.Header>Likes Goal</Card.Header>
              <br></br>
              <Card.Text> {this.state.challenge[0].goal}</Card.Text>
            </li>
            <li className="singleChallengeList">
              <Card.Header>Likes</Card.Header>
              <br></br>
              <Card.Text> {this.state.challenge[0].likes}</Card.Text>
            </li>
            <li className="singleChallengeList">
              <Card.Header>Fulfilled By</Card.Header>
              <br></br>
              <Card.Text>{this.state.challenge[0].fulfilledBy_id}</Card.Text>
            </li>
            <Link to="/pickedchallenges">
              <button className="greenButton" onClick={this.handleClick}>
                Click here to pick the challenge for yourself
              </button>
            </Link>

            <button className="greenButton" onClick={this.incrementMe}>
              Likes: {this.state.challenge[0].likes}{" "}
            </button>
            <Upload />
            <button className="greenButton" onClick={this.challengeComplete}>
              Status: {this.state.challenge[0].status}
            </button>
          </Card>
        </ul>
      </div>
    );
  }
}
singleChallenge.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(singleChallenge);
