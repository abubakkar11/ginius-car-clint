import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import SighUp from "../Pages/SighUp/SighUp";

export const router =createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/sighUp',
            element : <SighUp></SighUp>
        },
        {
          path : '/checkout/:id',
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element : <CheckOut></CheckOut>
        },
        {
          path : '/orders',
          element :<Orders></Orders>
        }
    ]
  }
])