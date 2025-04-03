import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginRegister from "./components/LoginRegister";
import { useEffect } from "react";
import { auth } from "./utills/Firebase";
import Browse from "./components/Browse";
import { addUser, removeUser } from "./utills/userSlice";
import GptSearchPage from "./components/GptSearchPage";

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
        },
        {
          path:'/search',
          element : <GptSearchPage/>
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
