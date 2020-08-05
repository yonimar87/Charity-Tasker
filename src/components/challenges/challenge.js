import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenge, pickChallenge } from "../../utils/challengesAPI";
import Upload from "./upload.js";
import { Link } from "react-router-dom";

class singleChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: [true],
      count: 0,
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
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    if (this.state.challenge.length === 0) {
      return null;
    }
    const { user } = this.props.auth;
    return (
      <div>
        {this.state.challenge[0]._id}
        {this.state.challenge[0].name}
        {this.state.challenge[0].description}
        {this.state.challenge[0].shortDescription}
        {this.state.challenge[0].category}
        {this.state.challenge[0].likes}
        <Link to="/pickedchallenges">
          <button onClick={this.handleClick}>
            Click here to pick the challenge for yourself
          </button>
        </Link>
        <button onClick={this.incrementMe}>Likes: {this.state.count} </button>
        <Upload />
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
