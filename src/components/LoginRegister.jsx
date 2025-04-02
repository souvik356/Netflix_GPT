import React, { useRef, useState } from "react";
import { validateData } from "../utills/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utills/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { useNavigate } from "react-router";
import { netflix_bg } from "../utills/Constants";

const LoginRegister = () => {
  const [isSignIn, setSetIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleToggle = () => {
    setSetIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // register
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        //   console.log(user);
        updateProfile(user,{displayName:name.current.value}).then(() => {
            const {uid,email,displayName} = user
            dispatch(addUser({uid:uid,displayName: displayName,email:email}))
          }).catch((error) => {
            setErrorMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorMessage);
        });
    } else {
      // login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          // console.log(userCredential);
          console.log('logged in successfull',user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        //   console.log(error.message);
          
          setErrorMessage(errorMessage || errorCode)
        });
    }
  };
  return (
    <div className="relative w-full h-screen bg-black">
      <img
        src={netflix_bg}
        className="hidden lg:block"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container lg:w-3/12  bg-black/80 p-6  rounded-lg flex flex-col gap-4">
          <h1 className="text-white font-bold text-2xl">
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="text-white p-2 bg-gray-800 rounded"
              placeholder="Enter your name"
            />
          )}
          <input
            ref={email}
            type="email"
            className="text-white p-2 bg-gray-800 rounded outline-none"
            placeholder="Enter your Email Address"
          />
          <input
            ref={password}
            type="password"
            className="text-white outline-none p-2 bg-gray-800 rounded"
            placeholder="Enter your Password"
          />
          <button
            onClick={handleButtonClick}
            className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </button>
          <p onClick={handleToggle} className="text-white">
            {isSignIn
              ? "New to Netflix?Sign up now.😊"
              : "Already a member?Sign in now.🎊"}
          </p>
          <p className="text-center text-red-500 font-semibold">
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
