import "./IncomingRideRequestPanel.css";

const IncomingRideRequestPanel = () => {
  return (
    <div className="incoming-request-panel">
      <div className="incoming-request-header">
        <h2>New Ride Request</h2>
        <span className="incoming-request-timer">00:15</span>
      </div>

      <div className="incoming-request-card">
        <span className="incoming-request-name">Maria Santos</span>
        <p className="incoming-request-label">Pickup:</p>
        <p className="incoming-request-value">Rizal St. corner Mabini St.</p>
        <p className="incoming-request-label">Drop-off:</p>
        <p className="incoming-request-value">Public Market</p>
        <p className="incoming-request-meta">Distance to pickup: 800m · Fare: ₱35</p>
      </div>

      <div className="incoming-request-actions">
        <button className="incoming-request-decline-btn">DECLINE</button>
        <button className="incoming-request-accept-btn">ACCEPT</button>
      </div>
    </div>
  );
};

export default IncomingRideRequestPanel;

