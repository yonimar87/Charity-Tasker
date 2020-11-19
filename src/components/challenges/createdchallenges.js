import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getCreatedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function MyChallengeList (props) {
  const [createdChallenges, setCreatedChallenges] = useState([]);

  useEffect( () => {
    getCreatedChallenges(props.auth).then((res) => 
    setCreatedChallenges(res.data)
    )}, []);

  return (
    <div>
      <h1>Challenges below</h1>
      {createdChallenges.map((c) => (
        <>
          <ul>
            <Card>
              <Card.Header as="h4">
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
              </Card.Header>
              <Card.Text>
                <li></li>
                <li>Category: {c.category}</li>
                <li>Goal: {c.goal} Likes</li>
                <li>Current Likes: {c.likes}</li>
                <li>Description: {c.shortDescription}</li>
              </Card.Text>
            </Card>
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
