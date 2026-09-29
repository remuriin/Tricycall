import { createBrowserRouter, Navigate } from "react-router-dom";
import PassengerLayout from "../layouts/PassengerLayoutHeader";
import DriverLayout from "../layouts/DriverLayoutHeader";

import Auth from "../features/auth/pages/LoginSignUp";

import PassengerHome from "../features/passenger/pages/Home";
import PassengerAddressSearch from "../features/passenger/pages/AddressSearch";
import PassengerFindingDriver from "../features/passenger/pages/FindingDriver";
import PassengerNoDriversFound from "../features/passenger/pages/NoDriversFound";
import PassengerCancelRideConfirm from "../features/passenger/pages/CancelRideConfirm";
import PassengerPaymentMethod from "../features/passenger/pages/PaymentMethod";
import PassengerMyRides from "../features/passenger/pages/MyRides";
import PassengerTripComplete from "../features/passenger/pages/TripComplete";
import PassengerProfile from "../features/passenger/pages/Profile";
import PassengerSafety from "../features/passenger/pages/Safety";

import DriverHome from "../features/driver/pages/Home";
import IncomingRideRequest from "../features/driver/pages/IncomingRideRequest";
import ArrivedAtPickup from "../features/driver/pages/ArrivedAtPickup";
import TripInProgress from "../features/driver/pages/TripInProgress";
import RideRequestExpired from "../features/driver/pages/RideRequestExpired";
import DriverCancelRideConfirm from "../features/driver/pages/CancelRideConfirm";
import DriverProfile from "../features/driver/pages/Profile";
import DriverSafety from "../features/driver/pages/Safety";
import EarningsPayout from "../features/driver/pages/EarningsPayout";
import RideHistory from "../features/driver/pages/RideHistory";
import SignUpDocuments from "../features/driver/pages/SignUpDocuments";
import VerificationPending from "../features/driver/pages/VerificationPending";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to = "/login" replace />
  },
  {
    path: "/login",
    element: <Auth />,
  },
  // {
    // later dapat start muna sa "/" then auth 
    // (nagagawa ata to sa firebase nde ko pa alam)
    // path: "/",
    // element: <Navigate to="/passenger/home" replace />,
    // passenger lng muna
    // gagawa ng routeRedirect.jsx para sa user login handling (passenger or driver)
  // },
  {
    path: "/passenger",
    children: [
      {
        element: <PassengerLayout />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <PassengerHome /> },
          { path: "my-rides", element: <PassengerMyRides /> },
          { path: "profile", element: <PassengerProfile /> },
        ],
      },
      {
        children: [
          { path: "finding-driver", element: <PassengerFindingDriver /> },
          { path: "cancel-ride", element: <PassengerCancelRideConfirm /> },
          { path: "address-search", element: <PassengerAddressSearch /> },
          { path: "no-drivers-found", element: <PassengerNoDriversFound /> },
          { path: "payment", element: <PassengerPaymentMethod /> },
          { path: "trip-complete", element: <PassengerTripComplete /> },
          { path: "safety", element: <PassengerSafety /> },
        ]
      },
    ],
  },
  {
    path: "/driver",
    children: [
      {
        element: <DriverLayout />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <DriverHome /> },
          { path: "incoming-ride-request", element: <IncomingRideRequest /> },
          { path: "arrived-at-pickup", element: <ArrivedAtPickup /> },
          { path: "trip-in-progress", element: <TripInProgress /> },
          { path: "ride-request-expired", element: <RideRequestExpired /> },
          { path: "cancel-ride", element: <DriverCancelRideConfirm /> },
          { path: "profile", element: <DriverProfile /> },
          { path: "safety", element: <DriverSafety /> },
          { path: "earnings-payout", element: <EarningsPayout /> },
          { path: "ride-history", element: <RideHistory /> },
          { path: "sign-up-documents", element: <SignUpDocuments /> },
          { path: "verification-pending", element: <VerificationPending /> },
        ],
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);