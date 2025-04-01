import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginRegister from "./components/LoginRegister";
import { useEffect } from "react";
import { auth } from "./utills/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./components/Browse";
import { useDispatch } from "react-redux";
import { addUser } from "./utills/userSlice";

function App() {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <LoginRegister />,
        },
        {
          path:'/browse',
          element : <Browse/>
        }
      ],
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log('user',user);
        
        const {uid,displayName,email} = user
        dispatch(addUser({uid:uid,displayName:displayName,email:email}))
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
