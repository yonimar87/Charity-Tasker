import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h2>
              <b>Hey there,</b> {user.username}
            </h2>
            <h1 className="flow-text grey-text text-darken-1">
              Please choose an option below
            </h1>
            <div>
              <Link to="/create_challenge">Create a Challenge</Link>
            </div>
            <div>
              <Link to="/challenges">View Existing Challenges</Link>
            </div>
            <div>
              <Link to="/mycreatedchallenges">Created Challenges</Link>
            </div>
            <div>
              <Link to="/pickedchallenges">Picked challenges</Link>
            </div>
            <Link to="/charities">
              <div>Charities we work with</div>
            </Link>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
