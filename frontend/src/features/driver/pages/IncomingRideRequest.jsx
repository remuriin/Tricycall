import IncomingRideRequestPanel from "../components/IncomingRideRequestPanel";
import "./IncomingRideRequest.css";

const IncomingRideRequest = () => {
  return (
    <div className="incoming-request-page">
      <div className="map-view">
        <span>MAP VIEW</span>
      </div>
      <IncomingRideRequestPanel />
    </div>
  );
};

export default IncomingRideRequest;
