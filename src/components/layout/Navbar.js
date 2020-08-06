import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class NavbarBlue extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div className="container">
        <Navbar id="Navbar" variant="primary">
          <Nav className="mr-auto">
            {user.id ? (
              <>
                <Nav.Link onClick={this.onLogoutClick}> Logout </Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
NavbarBlue.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(NavbarBlue);
