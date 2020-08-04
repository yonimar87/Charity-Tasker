import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenge, pickChallenge } from '../../utils/challengesAPI'

class singleChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            challenge: [],
        }
        
      const jason = JSON.stringify(this.state.challenge)
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      pickChallenge(this.state.challenge[0]._id, this.props.auth).then(res => console.log('Updated'));
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    componentDidMount() {
        const {_id} = this.props.location.state
        getChallenge(_id).then(res => this.setState({challenge: res.data}))
        if (this.state.challenge !== []) {
          console.log(getChallenge());
        }
       
    }
  
      render() {
        if (this.state.challenge.length === 0) {
          return null
        }
          const { user } = this.props.auth;
          return (
              <div>
                 {this.state.challenge[0]._id}
                 {this.state.challenge[0].name}
                 {this.state.challenge[0].description}
                 {this.state.challenge[0].shortDescription}
                 {this.state.challenge[0].category}
                 <button onClick={this.handleClick}>Click here to pick the challenge for yourself</button>
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