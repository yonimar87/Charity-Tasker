import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getChallenges } from '../../utils/challengesAPI'
class ChallengeList extends Component {
    constructor() {
        super();
        this.state = {
            challenges: []
        }
    }
    
   /* <div>
    <h1>Challenge below</h1>
    {this.state.challenges.map(c => 
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{c.catagory}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{c.goal}</Card.Subtitle>
      <Card.Text>
        {c.shortDescription}
      </Card.Text>
      <Card.Link href="#">Click here for more info..</Card.Link>
    </Card.Body>
  </Card>
  )}</div>*/

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
                <h1>Challenge below</h1>
                {this.state.challenges.map(c => 
                <>
                <ul>
                    <li>{c.name}</li>
                    <li>{c._id}</li>
                    <li>{c.catagory}</li>
                    <li>{c.goal}</li>
                    <li>{c.shortDescription}</li>
                </ul>
                <input type="checkbox" />
                </>
                )}
            </div>
        );
    }
  }
  ChallengeList.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ChallengeList);