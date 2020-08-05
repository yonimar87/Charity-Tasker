import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Provider } from "react-redux";
import store from "../store";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import PrivateRoute from "./private-route/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";
import Challenges from "./challenges/challenges"
import Charities from "./charities/charities"
import Category from "./challenges/category"
import Footer from "./layout/Footer"
import createChallenge from "./challenges/challengeNew"
import singleChallenge from "./challenges/challenge"
import MyCreatedChallenge from "./challenges/createdchallenges"
import PickedChallenges from "./challenges/pickedchallenges"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/charities" component={Charities} />
            <Route exact path="/category" component={Category} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/challenges" component={Challenges} />
              <PrivateRoute exact path="/create_challenge" component={createChallenge} />
              <PrivateRoute exact path="/challenge" component={singleChallenge} />
              <PrivateRoute exact path="/mycreatedchallenges" component={MyCreatedChallenge} />
              <PrivateRoute exact path="/pickedchallenges" component={PickedChallenges} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;