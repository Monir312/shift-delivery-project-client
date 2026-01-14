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
import DashboardLayout from "../layouts/DashboardLayout";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoutes from "./AdminRoutes";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

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
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      },
      {
        path: 'send-parcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
         loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      },
      {
        path: 'parcel-track/:trackingId',
        Component: ParcelTrack
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
  },



  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true, 
        Component: DashboardHome,
      },
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: "payment-history",
        Component: PaymentHistory
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled
      },
      // rider related routes 
      {
        path: 'assigned-deliveries',
        element: <RiderRoute><AssignDeliveries></AssignDeliveries></RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
      },

      // admin related routes
      {
        path: 'approve-riders',
        element: <AdminRoutes><ApproveRiders></ApproveRiders></AdminRoutes>
      },
      {
        path: 'assign-riders',
        element: <AdminRoutes><AssignRiders></AssignRiders></AdminRoutes>
      },
      {
        path: 'users-management',
        element: <AdminRoutes><UsersManagement></UsersManagement></AdminRoutes>
      }
    ]
  }
]);