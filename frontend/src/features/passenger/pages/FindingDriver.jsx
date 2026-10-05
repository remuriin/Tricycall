import LiveTrackingPanel from "../components/LiveTrackingPanel";
import "./FindingDriver.css";

const FindingDriver = () => {
  return (
    <div className="finding-driver-page">
      <div className="map-view">
        <span>MAP — LIVE TRACKING</span>
      </div>
      <LiveTrackingPanel />
    </div>
  );
};

export default FindingDriver;
