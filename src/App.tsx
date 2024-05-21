import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DashBoard from "./modules/dashboard/DashBoard"
import Login from "./modules/login/Login"
import PrivateRoute from "./modules/login/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
  }

])

function App() {

  return (<RouterProvider router={router}/>)
}

export default App
