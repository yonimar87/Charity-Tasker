import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h1>
              <b>Charity Tasker</b>
            </h1>
            <h4>A MERN App created as a Non-For Profit platform</h4>
            <p className="flow-text grey-text text-darken-1">
              Log in and create your own challenges for other users to complete.
              A donation goal is attached to each challenge. Once the goal is
              met, the challenge must be completed or the user who chose to
              complete it has to donate!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <Button variant="warning">Register</Button>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                <Button variant="warning">Log In</Button>
              </Link>
            </div>

            <iframe
              title="Challenges"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XI8l61-xCOU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
