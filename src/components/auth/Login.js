import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Login</b> below
          </h4>
          <p className="grey-text text-darken-1">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.onSubmit} className="login">
          <div className="form-group">
            <label htmlFor="email">
              Email:
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                className="form-control"
                id="email"
                type="email"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                className="form-control"
                id="password"
                type="password"
              />
            </label>
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",

                backgroundColor: "#223623",
                color: "white",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
