import "./LiveTrackingPanel.css";

const LiveTrackingPanel = () => {
  return (
    <div className="live-tracking-panel">
      <h2>Driver is on the way</h2>
      <p className="eta">Arriving in 4 minutes</p>

      <div className="driver-card">
        <div className="driver-avatar" />
        <div className="driver-info">
          <span className="driver-name">Juan Dela Cruz</span>
          <span className="driver-meta">ABC 1234 · Rating 4.8</span>
        </div>
      </div>

      <button className="cancel-ride-btn">CANCEL RIDE</button>
    </div>
  );
};

export default LiveTrackingPanel;

