import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utills/Firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../utills/userSlice";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser())
        navigate('/')
        console.log('log out successfull');
      }).catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="w-full h-20 z-10 absolute bg-gradient-to-b from-black flex items-center justify-between p-4">
      <Link to='/browse' className="">
        <img
          className="w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </Link>

      {user && (
        <div className="flex items-center gap-2">
            <h1>{user.displayName}</h1>
          <button onClick={handleSignOut}>Sign-out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
