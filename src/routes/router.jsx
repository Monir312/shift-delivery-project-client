import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
     element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />  
      },
      {
        path: 'rider',
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path: 'send-parcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      }
    ]
  },


  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        Component: Register

      }
    ]
  }
]);