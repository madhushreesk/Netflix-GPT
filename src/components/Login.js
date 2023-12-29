import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const toggleSignInForm = () => {
    setToggleSignIn(!toggleSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-sm "
      >
        <div className=" font-bold text-3xl py-4 text-white">
          {toggleSignIn ? "Sign In" : "Sign Up."}
        </div>
        {!toggleSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full text-md text-white rounded-sm bg-gray-800 focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-2 w-full text-md text-white rounded-md bg-gray-800 focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 m-2 w-full text-md text-white rounded-md bg-gray-800 focus:outline-none"
        />
        {!toggleSignIn && (
          <input
            type="password"
            placeholder="confirm password"
            className="p-4 m-2 w-full text-md text-white rounded-md bg-gray-800 focus:outline-none"
          />
        )}

        <p className="text-red-700 text-center mt-2">{errMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-2 m-2 bg-red-600 text-white w-full mt-5 rounded-sm"
        >
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="py-4 text-white cursor-pointer "
        >
          {toggleSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
