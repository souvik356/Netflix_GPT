import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginRegister from "./components/LoginRegister";
import { useEffect } from "react";
import { auth } from "./utills/Firebase";
import Browse from "./components/Browse";
import { addUser, removeUser } from "./utills/userSlice";

function App() {
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


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
