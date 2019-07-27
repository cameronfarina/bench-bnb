import React from "react";
import GreetingContainer from "../components/GreetingContainer";
import LoginFormContainer from "../components/LoginFormContainer";
import SignupFormContainer from "../components/SignupFormContainer";
import SearchContainer from "./SearchContainer";
import { Route } from "react-router-dom";
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench Bnb</h1>
        <GreetingContainer />
      </header>

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SearchContainer} />
    </div>
  );
};

export default App;
