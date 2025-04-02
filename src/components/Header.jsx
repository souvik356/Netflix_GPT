import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utills/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utills/userSlice";
import { Link, useNavigate } from "react-router";
import { netflix_logo } from "../utills/Constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log(user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser())
        navigate('/')
        // console.log('log out successfull');
      }).catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('user is logged in');
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log('user',user);
        const {uid,displayName,email} = user
        dispatch(addUser({uid:uid,displayName:displayName,email:email}))
        navigate('/browse')
      } else {
        // User is signed out
        // console.log('logged out');
        dispatch(removeUser())
        navigate('/')
      }
    });

    return ()=>unsubscribe();
  }, []);


  return (
    <div className="w-full h-20 z-10 absolute bg-gradient-to-b from-black flex items-center justify-between p-4">
      <Link to='/browse' className="">
        <img
          className="w-36"
          src={netflix_logo}
          alt="netflix-logo"
        />
      </Link>

      {user && (
        <div className="flex items-center gap-2 text-white">
            <h1>{user.displayName}</h1>
          <button onClick={handleSignOut}>Sign-out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
