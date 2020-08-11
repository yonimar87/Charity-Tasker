import axios from "axios";
import { URI } from '../config/api_server'

export const sendChallenge = (challengeInput) => {
  console.log(challengeInput);

  return axios.post(`${URI}/api/challenges`, challengeInput);
};

export const pickChallenge = (challenge_id, auth) => {
  console.log(challenge_id);
  console.log(auth);
  const body = { challenge_id, user_id: auth.user.id };
  return axios.put(`${URI}/api/challenges`, body);
};

export const getChallenges = () => {
  return axios.get(`${URI}/api/challenges`);
};

export const updateLikes = (challengeId, newLikesCount) => {
  const updatedValue = {
    likes: newLikesCount,
  };
  return updateChallenge(challengeId, updatedValue);
};

export const updateStatus = (challengeId, newStatus) => {
  const updatedValue = {
    status: newStatus,
  };
  return updateChallenge(challengeId, updatedValue);
};

export const updateChallenge = (challengeId, updatedValue) => {
  return axios.patch(
    `${URI}/api/challenges/${challengeId}`,
    updatedValue
  );
};

export const getCreatedChallenges = (auth) => {
  const id = auth.user.id;
  return axios.get(`${URI}/api/challenges?creator_id=${id}`);
};

export const getPickedChallenges = (auth) => {
  const id = auth.user.id;
  return axios.get(`${URI}/api/challenges?fulfilledBy_id=${id}`);
};

export const getChallenge = (id) => {
  return axios.get(`${URI}/api/challenges/${id}`);
};

// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
// //   SET_CURRENT_USER,
// //   USER_LOADING
// } from "../actions/types";
// // Register User
//  export const allChallenges = (challengeData, history) => dispatch => {
//   axios
//     .get("/api/challenges", challengeData)
//     // .then(res => history.push("/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Login - get user token
// export const loginUser = userData => dispatch => {
//   axios
//     .post("/api/users/login", userData)
//     .then(res => {
//       // Save to localStorage
// // Set token to localStorage
//       const { token } = res.data;
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };
// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };
