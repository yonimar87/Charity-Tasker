import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import className from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    // const userData = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    this.props.registerUser(newUser, this.props.history);
    // this.props.loginUser(userData, this.props.history)
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Register</b> below
          </h4>
          <p className="grey-text text-darken-1">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.onSubmit} className="login">
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input
                onChange={this.onChange}
                value={this.state.username}
                error={errors.username}
                id="username"
                type="text"
                className="form-control"
              />
            </label>
            <span className="red-text">{errors.username}</span>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className="form-control"
              />
            </label>
            <span className="red-text">{errors.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                className="form-control"
                type="email"
              />
            </label>
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                className="form-control"
                id="password"
                type="password"
              />
            </label>
            <span className="red-text">{errors.password}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password2">
              Confirm Password
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                className="form-control"
                id="password2"
                type="password"
              />
            </label>
            <span className="red-text">{errors.password2}</span>
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                backgroundColor: "#223623",
                color: "white",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
