import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constant";
import { isvalid } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAuth = () => {
    const message = isvalid(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message == null && !isSignInForm) {
      //sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          setErrorMessage(errorCode + errorMessage);
        });


    }

    if (message == null && isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="bg" className="w-full h-full"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute w-4/12 p-12 mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80"
      >
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
          ref={email}
          placeholder="E-mail id or phone no."
          className="p-3 bg-gray-700 w-full my-3 rounded-lg"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 bg-gray-700 w-full my-3 rounded-lg"
        ></input>
        <p className="text-red-600">{errorMessage}</p>
        <input type="checkbox" className="accent-red-600 my-6" />
        <label className="px-1 my-6">Remember me</label>
        <button
          className="bg-red-600 w-full p-3 rounded-lg opacity-100"
          onClick={handleAuth}
        >
          Sign in
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer my-6">
          {isSignInForm
            ? "New to Netfilx? Sign Up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
