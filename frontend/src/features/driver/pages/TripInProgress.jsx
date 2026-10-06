import TripInProgressPanel from "../components/TripInProgressPanel";
import "./TripInProgress.css";

const TripInProgress = () => {
  return (
    <div className="trip-progress-page">
      <div className="map-view">
        <span>NAVIGATION VIEW</span>
      </div>
      <TripInProgressPanel />
    </div>
  );
};

export default TripInProgress;
