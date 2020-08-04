import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div>
      
        <h1>Welcome to Charity-Tasker!</h1>
        <h3>Click on a category below to see what challenges are available</h3>
        <ul>
          <li>Movies</li>
          <li>Food</li>
          <li>Adventure</li>
          <li>Dragons</li>
        </ul>
      </div>
    );
  }
}
export default Landing;