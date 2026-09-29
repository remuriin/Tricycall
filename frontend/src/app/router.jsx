import { createBrowserRouter, Navigate } from "react-router-dom";
import PassengerLayout from "../layouts/PassengerLayoutHeader";

import Home from "../features/passenger/pages/Home";
import AddressSearch from "../features/passenger/pages/AddressSearch";
import FindingDriver from "../features/passenger/pages/FindingDriver";
import NoDriversFound from "../features/passenger/pages/NoDriversFound";
import CancelRideConfirm from "../features/passenger/pages/CancelRideConfirm";
import PaymentMethod from "../features/passenger/pages/PaymentMethod";
import MyRides from "../features/passenger/pages/MyRides";
import TripComplete from "../features/passenger/pages/TripComplete";
import Profile from "../features/passenger/pages/Profile";
import Safety from "../features/passenger/pages/Safety";

export const router = createBrowserRouter([
  {
    // later dapat start muna sa "/" then auth 
    // (nagagawa ata to sa firebase nde ko pa alam)
    path: "/",
    element: <Navigate to="/passenger/home" replace />,
    // passenger lng muna
    // gagawa ng routeRedirect.jsx para sa user login handling (passenger or driver)
  },
  {
    path: "/passenger",
    children: [
      {
        element: <PassengerLayout />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <Home /> },
          { path: "my-rides", element: <MyRides /> },
          { path: "profile", element: <Profile /> },
        ],
      },
      {
        children: [
          { path: "finding-driver", element: <FindingDriver /> },
          { path: "cancel-ride", element: <CancelRideConfirm /> },
          { path: "address-search", element: <AddressSearch /> },
          { path: "no-drivers-found", element: <NoDriversFound /> },
          { path: "payment", element: <PaymentMethod /> },
          { path: "trip-complete", element: <TripComplete /> },
          { path: "safety", element: <Safety /> },
        ]
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
