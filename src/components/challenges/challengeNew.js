import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { sendChallenge } from "../../utils/challengesAPI";
import { Redirect } from "react-router-dom";

class createChallenge extends Component {
  constructor() {
    super();
    this.state = {
      category: "Food",
      description: "",
      name: "",
      shortDescription: "",
      goal: 0,
      redirect: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    sendChallenge({
      category: this.state.category,
      description: this.state.description,
      name: this.state.name,
      shortDescription: this.state.shortDescription,
      goal: this.state.goal,
      // token: localStorage.getItem("jwtToken")
      creator_id: this.props.auth.user.id,
    }).then(this.setState({ redirect: "/dashboard" }));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="container">
        <h1>Create a new challenge</h1>
        <form onSubmit={this.handleSubmit} className="login">
          <div className="form-group">
            <label>
            Pick the type of challenge to be completed
            <select
              onChange={this.handleChange}
              name="category"
              className="form-control"
            >
              <option value="Food">Food</option>
              <option value="Adventure">Adventure</option>
              <option value="Video">Video</option>
              <option value="Personal">Personal</option>
            </select>
          </label>
          </div>
          <br></br>
          <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <br></br>
          <div className="form-group">
          <label>
            Description
            <textarea name="description" onChange={this.handleChange} className="form-control" />
          </label>
          </div>
          <br></br>
          <div className="form-group">
          <label>
            Likes Goal:
            <input type="integer" name="goal" onChange={this.handleChange} className="form-control"/>
          </label>
          </div>
          <input type="submit" value="Submit" onSubmit={this.handleSubmit} className="form-control"/>
        </form>
      </div>
    );
  }
}

createChallenge.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(createChallenge);
