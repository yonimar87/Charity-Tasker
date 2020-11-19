import React, { useState, useEffect } from "react";
import { getChallenges } from "../../utils/challengesAPI";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function ChallengeList (props) {
  const [challengesList, setChallengesList] = useState([]);

  useEffect( () => {
    getChallenges(props.auth).then((res) => 
    setChallengesList(res.data)
    )}, []);

    return (
      <div>
        <h1>Challenges below</h1>
        {console.log(challengesList)}
        {challengesList.map((c) => (
          <>
            <ul>
              <Card variant="warning">
                <Card.Header as="h4">{c.name}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    <li>Goal: {c.goal}</li>
                  </Card.Title>
                  <Card.Text>
                    <li>Category: {c.category}</li>
                    <li>Description: {c.description}</li>
                    <li>Current Likes: {c.likes}</li>
                  </Card.Text>
                  <Link
                    to={{
                      pathname: `/challenge`,
                      state: {
                        _id: c._id,
                      },
                    }}
                  >
                    <Button variant="primary">Go To Challenge</Button>
                  </Link>
                </Card.Body>
              </Card>
            </ul>
          </>
        ))}
      </div>
    );
}

// class ChallengeList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       challenges: [],
//     };
//   }

  // onLogoutClick = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

//   render() {
//     // const { user } = this.props.auth;
//     return (
//       <div>
//         <h1>Challenges below</h1>
//         {this.state.challenges.map((c) => (
//           <>
//             <ul>
//               <Card variant="warning">
//                 <Card.Header as="h4">{c.name}</Card.Header>
//                 <Card.Body>
//                   <Card.Title>
//                     <li>Goal: {c.goal}</li>
//                   </Card.Title>
//                   <Card.Text>
//                     <li>Category: {c.category}</li>
//                     <li>Description: {c.description}</li>
//                     <li>Current Likes: {c.likes}</li>
//                   </Card.Text>
//                   <Link
//                     to={{
//                       pathname: `/challenge`,
//                       state: {
//                         _id: c._id,
//                       },
//                     }}
//                   >
//                     <Button variant="primary">Go To Challenge</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </ul>
//           </>
//         ))}
//       </div>
//     );
//   }
// }

export default ChallengeList;
