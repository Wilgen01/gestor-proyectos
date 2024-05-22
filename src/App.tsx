import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DashBoard from "./pages/Dashboard/DashBoard"
import Login from "./pages/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

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
