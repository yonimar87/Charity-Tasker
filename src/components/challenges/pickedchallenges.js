import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getPickedChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function PickedChallengeList (props) {
  const [challenges, setChallenge] = useState([]);

  useEffect( () => {
    getPickedChallenges(props.auth).then((res) =>
    setChallenge(res.data)
    )}, []);

    return(<div>
      <h1>CHALLENGES TO COMPLETE</h1>
      {console.log(challenges)}
      {challenges.map((c) => (
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
                <li>Category: {c.category}</li>
                <li>Goal: {c.goal} likes</li>
                <li>{c.shortDescription}</li>
                <li>{c.description}</li>
                <li>Current Likes: {c.likes}</li>
              </Card.Text>
              <li>
                {" "}
                <Card.Header as="h5">
                  {c.fulfilledBy_id
                    ? "Challenge already completed!"
                    : "Still needs completing...."}
                </Card.Header>
              </li>
            </Card>
          </ul>
        </>
      ))}
    </div>)
  }
  // function onLogoutClick(e) {
  //   e.preventDefault();
  //   props.logoutUser();
  // };

 

// class PickedChallengeList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       challenges: [],
//     };
//   }

//   onLogoutClick = (e) => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };


//   componentDidMount() {
//     getPickedChallenges(this.props.auth).then((res) =>
//       this.setState({ challenges: res.data })
//     );
//   }
//   render() {
//     // const { user } = this.props.auth;
//     return (
//       <div>
//         <h1>CHALLENGES TO COMPLETE</h1>
//         {this.state.challenges.map((c) => (
//           <>
//             <ul>
//               <Card>
//                 <Card.Header as="h4">
//                   <Link
//                     to={{
//                       pathname: `/challenge`,
//                       state: {
//                         _id: c._id,
//                       },
//                     }}
//                   >
//                     <li>{c.name}</li>
//                   </Link>
//                 </Card.Header>
//                 <Card.Text>
//                   <li>Category: {c.category}</li>
//                   <li>Goal: {c.goal} likes</li>
//                   <li>{c.shortDescription}</li>
//                   <li>{c.description}</li>
//                   <li>Current Likes: {c.likes}</li>
//                 </Card.Text>
//                 <li>
//                   {" "}
//                   <Card.Header as="h5">
//                     {c.fulfilledBy_id
//                       ? "Challenge already completed!"
//                       : "Still needs completing...."}
//                   </Card.Header>
//                 </li>
//               </Card>
//             </ul>
//           </>
//         ))}
//       </div>
//     );
//   }
// }
PickedChallengeList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(PickedChallengeList);
