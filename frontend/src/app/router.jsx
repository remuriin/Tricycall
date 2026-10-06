import { createBrowserRouter, Navigate } from "react-router-dom";
import PassengerHeader from "../layouts/PassengerHeader";
import PassengerHeaderWithSidePanel from "../layouts/PassengerHeaderWithSidePanel";
import DriverHeader from "../layouts/DriverHeader";
import DriverHeaderWithSidePanel from "../layouts/DriverHeaderWithSidePanel";

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
        element: <PassengerHeaderWithSidePanel />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <PassengerHome /> },
          { path: "address-search", element: <PassengerAddressSearch /> },
          { path: "finding-driver", element: <PassengerFindingDriver /> },
        ],
      },
      {
        element: <PassengerHeader />,
        children: [
          { path: "my-rides", element: <PassengerMyRides /> },
          { path: "profile", element: <PassengerProfile /> },
          { path: "trip-complete", element: <PassengerTripComplete /> },
          { path: "safety", element: <PassengerSafety /> },
        ],
      },
      // pages with no header
      { path: "cancel-ride", element: <PassengerCancelRideConfirm /> },
      { path: "no-drivers-found", element: <PassengerNoDriversFound /> },
      { path: "payment", element: <PassengerPaymentMethod /> },
    ],
  },
  {
    path: "/driver",
    children: [
      {
        element: <DriverHeaderWithSidePanel />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <DriverHome /> },
          { path: "incoming-ride-request", element: <IncomingRideRequest /> },
          { path: "arrived-at-pickup", element: <ArrivedAtPickup /> },
          { path: "trip-in-progress", element: <TripInProgress /> },
        ],
      },
      {
        element: <DriverHeader />,
        children: [
          { path: "earnings-payout", element: <EarningsPayout /> },
          { path: "ride-history", element: <RideHistory /> },
          { path: "profile", element: <DriverProfile /> },
          { path: "safety", element: <DriverSafety /> },
        ],
      },
      // pages with no header
      { path: "verification-pending", element: <VerificationPending /> },
      { path: "ride-request-expired", element: <RideRequestExpired /> },
      { path: "cancel-ride", element: <DriverCancelRideConfirm /> },
      { path: "sign-up-documents", element: <SignUpDocuments /> },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
