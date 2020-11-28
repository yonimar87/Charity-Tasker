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
// import Upload from "./upload.js";
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
      <div>
        <h3>Challenge Title: {this.state.challenge[0].name}</h3>
        <ul >
            <li>
              Category
              <br></br>
              {this.state.challenge[0].category}
            </li>
            <li>
              Description
              <br></br>
              {this.state.challenge[0].description}
            </li>
            <li>
              Likes Goal
              <br></br>
               {this.state.challenge[0].goal}
            </li>
            <li>
              Likes
              <br></br>
               {this.state.challenge[0].likes}
            </li>
            <li>
              Picked Up By
              <br></br>
              {this.state.challenge[0].fulfilledBy_id}
            </li>
            <Link to="/pickedchallenges">
              <button onClick={this.handleClick}>
                Click here to pick the challenge for yourself
              </button>
            </Link>

            <button onClick={this.incrementMe}>
              Likes: {this.state.challenge[0].likes}{" "}
            </button>
            {/* <Upload /> */}
            <button onClick={this.challengeComplete}>
              Status: {this.state.challenge[0].status}
            </button>
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
