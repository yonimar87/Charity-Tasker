import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getCreatedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";


function MyChallengeList (props) {
  const [createdChallenges, setCreatedChallenges] = useState([]);

  useEffect( () => {
    getCreatedChallenges(props.auth).then((res) => 
    setCreatedChallenges(res.data)
    )}, [props.auth]);

  return (
    <div>
      <h1>Challenges below</h1>
      {createdChallenges.map((c) => (
        <>
          <ul key={c._id}>
            <Link
              to={{
                pathname: `/challenge`,
                state: {
                  _id: c._id,
                },
              }}
            >
              <li>{c.name}</li>
            </Link>
            <li></li>
            <li>Category: {c.category}</li>
            <li>Goal: {c.goal} Likes</li>
            <li>Current Likes: {c.likes}</li>
            <li>Description: {c.shortDescription}</li>
          </ul>
        </>
      ))}
    </div>
  );
}

MyChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(MyChallengeList);
