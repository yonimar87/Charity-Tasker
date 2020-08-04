import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenges } from '../../utils/challengesAPI'

class singleChallenge extends Component {
    constructor() {
        super();
        this.state = {
            challenges: []
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    componentDidMount() {
        getChallenges().then(res => this.setState({challenges: res.data}))
    }
  
      render() {
          const { user } = this.props.auth;
          return (
              <div>
                {this.state.challenges.map(c => 
                <>
                <h1>{c.name}</h1>
                <ul>
                  <li>{c.category}</li>
                  <li>{c.goal}</li>
                  <li>{c.shortDescription}</li>
                </ul>
                Tag and commit to this challenge
                <input type="checkbox" checked={c.checked ? true : false}/> 
                </>
                )}
              </div>
          );
      }
    }
    singleChallenge.propTypes = {
      logoutUser: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired
    };
    const mapStateToProps = state => ({
      auth: state.auth
    });
    export default connect(
      mapStateToProps,
      { logoutUser }
    )(singleChallenge);