
import './App.css'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginRegister from './components/LoginRegister'

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element : <Body/>,
      children : [
        {
          path:'/',
          element : <LoginRegister />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
