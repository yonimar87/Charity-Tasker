//this page is currently not in use. However, will have a link to different catagories in which this page is called

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenges } from "../../utils/challengesAPI";
// import { Link } from "react-router-dom";

class Category extends Component {
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
              <li>{c.name}</li>

              <li>{c.category}</li>
              <li>{c.goal}</li>
              <li>{c.shortDescription}</li>
            </ul>
            <input type="checkbox" checked={c.checked ? true : false} />
          </>
        ))}
      </div>
    );
  }
}
Category.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Category);
