import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <Link
              to="/dashboard">
              Dashboard
            </Link>
          </div>
          <div>
            <Link
              to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link
              to="/register">
              Register
            </Link>
          </div>
          <div>
            <Link
              to="/">
              Home
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;