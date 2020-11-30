import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  getChallenge,
  pickChallenge,
  updateLikes,
  updateStatus,
} from "../../utils/challengesAPI";
// import Upload from "./upload.js";
import { Link } from "react-router-dom";

function SingleChallenge (props) {

  const [challenge, setChallenge] = useState([true])
  const [fulfilledBy_id, setFulfilledBy_id] = useState(false)

  const handleClick = () => {
    pickChallenge(challenge[0]._id, props.auth).then((res) =>
      console.log("Updated")
    );
  }

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  const confirmChallenge = () => {
    const { _id } = props.location.state;
    getChallenge(_id).then((res) => setChallenge({ challenge: res.data }));
    if (challenge !== []) {
      console.log(getChallenge());
    }
  }

  const incrementMe = () => {
    const challenges = challenge.slice(0);
    challenges[0].likes += 1;
    setChallenge({
      challenges: challenges,
    });
    updateLikes(challenge[0]._id, challenges[0].likes);
  };

  const challengeComplete = () => {
    if (challenge === [true]) {
      let challenges = challenge.slice(0);
      challenges[0].status = "Completed";
      setChallenge({
        challenges: challenges,
      });
      updateStatus(challenge[0]._id, challenges[0].status);
    } 
  };


  useEffect(() => {
    setChallenge();
    confirmChallenge()
    incrementMe()
    challengeComplete()
    onLogoutClick()
    handleClick()
  }, [props.auth]);

  return (
    <div>
      <h3>Challenge Title: {challenge[0].name}</h3>
      <ul >
          <li>
            Category
            <br></br>
            {challenge[0].category}
          </li>
          <li>
            Description
            <br></br>
            {challenge[0].description}
          </li>
          <li>
            Likes Goal
            <br></br>
             {challenge[0].goal}
          </li>
          <li>
            Likes
            <br></br>
             {challenge[0].likes}
          </li>
          <li>
            Picked Up By
            <br></br>
            {challenge[0].fulfilledBy_id}
          </li>
          <Link to="/pickedchallenges">
            <button onClick={handleClick}>
              Click here to pick the challenge for yourself
            </button>
          </Link>

          <button onClick={incrementMe}>
            Likes: {challenge[0].likes}{" "}
          </button>
          {/* <Upload /> */}
          <button onClick={challengeComplete}>
            Status (Click to complete): {challenge[0].status}
          </button>
      </ul>
    </div>
  );
}

SingleChallenge.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(SingleChallenge);


