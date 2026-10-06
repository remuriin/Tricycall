import "./TripInProgressPanel.css";

const TripInProgressPanel = () => {
  return (
    <div className="trip-progress-panel">
      <h2>Trip in Progress</h2>

      <div className="trip-progress-card">
        <span className="trip-progress-name">Maria Santos</span>
        <p className="trip-progress-label">Pickup:</p>
        <p className="trip-progress-value">Rizal St. corner Mabini St.</p>
        <p className="trip-progress-label">Drop-off:</p>
        <p className="trip-progress-value">Public Market</p>
      </div>

      <button className="trip-progress-call-btn">CALL PASSENGER</button>
      <button className="trip-progress-end-btn">END TRIP</button>
    </div>
  );
};

export default TripInProgressPanel;

