import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) => {  

  const isLoggedIn = () => (
    <div>
      <h3>Hello, {(currentUser.name).charAt(0).toUpperCase() + currentUser.name.slice(1)}!</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const isNotLoggedIn = () => (
    <div>
      <Link to="/login">Log In!</Link>
      <br />
      <Link to="/signup">Sign Up!</Link>
    </div>
  )
    
  return currentUser ? isLoggedIn() : isNotLoggedIn();
};


export default Greeting;