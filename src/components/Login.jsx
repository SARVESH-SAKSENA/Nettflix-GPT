import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="bg" className="w-full h-full"></img>
      </div>
      <form className="bg-black absolute w-4/12 p-12 mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80">
        <h1 className="text-bold text-4xl pb-12 pt-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 bg-gray-700 w-full my-3 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="E-mail id or phone no."
          className="p-3 bg-gray-700 w-full my-3 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-gray-700 w-full my-3 rounded-lg"
        ></input>
        <input type="checkbox" className="accent-red-600 my-6" />
        <label className="px-1 my-6">Remember me</label>
        <button className="bg-red-600 w-full p-3 rounded-lg opacity-100">
          Sign in
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer my-6">
          New to Netflix? Sign Up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
