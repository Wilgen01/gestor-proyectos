import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DashBoard from "./modules/dashboard/DashBoard"
import Login from "./modules/login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  }

])

function App() {

  return (<RouterProvider router={router}/>)
}

export default App
