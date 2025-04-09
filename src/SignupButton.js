import React from "react";

// eslint-disable-next-line no-unused-vars
const SignupButton = () => {
  const handleSignup = () => {
    alert("Sign up successful!");
  };

  return (
    <button onClick={handleSignup} className="signup-button">
      Sign Up
    </button>
  );
};