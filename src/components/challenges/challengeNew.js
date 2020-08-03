import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Form, Button} from 'react-bootstrap' 

class createChallenge extends Component {
  constructor() {
    super()
    this.state = {
      category: [],
      description: [],
      name: [],
      shortDescription: [],
      goal: [],
      creator_id: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
        <div>

<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Dragon" name="name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label >Pick a type of challenge</Form.Label>
      <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
      <option value="Movies">Movies</option>
      <option value="Food">Food</option>
      <option value="Adventure">Adventure</option>
      <option value="Dragons">Dragon</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Short Description</Form.Label>
<Form.Control as="textarea" rows="3" name="shortDescription" value={this.state.value} onChange={this.handleChange} />
</Form.Group>
<Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Label>Long Description</Form.Label>
<Form.Control as="textarea" rows="3" name="description" value={this.state.value} onChange={this.handleChange} />
  </Form.Group>
    <Form.Label>Goal</Form.Label>
    <Form.Control name="goal" value={this.state.value} onChange={this.handleChange} />
  <Button variant="primary" type="submit" value={this.state.value} onSubmit={this.handleSubmit}>
    Submit
  </Button>
</Form>


          <h1>Create a new challenge</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
            Pick the type of challenge to be completed
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Food">Food</option>
                <option value="Adventure">Adventure</option>
                <option value="Video">Video</option>
                <option value="Dragon">Dragon</option>
              </select>
            </label>
            <label>
              Name:
              <input type="" name="name" />
            </label>
            <label>
              Description
              <textarea name="description" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Short Description
              <textarea name="shortDescription" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Goal:
              <input type="integer" name="goal" />
            </label>
            <label>
              Created By
              <input type="box" name="creator_id" />
            </label>
            <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
          </form>
        </div>
    )
  }  
}

createChallenge.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(createChallenge);