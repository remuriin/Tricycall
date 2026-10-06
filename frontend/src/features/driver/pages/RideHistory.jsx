import "./RideHistory.css";

const RideHistory = () => {
  return (
    <div className="driver-ride-history-page">
      <h2>Ride History</h2>

      <div className="driver-ride-history-card">
        <div className="driver-ride-history-details">
          <span className="driver-ride-history-date">Today, 2:15 PM</span>
          <span className="driver-ride-history-name">Maria Santos</span>
          <span className="driver-ride-history-route">Rizal St. → Public Market</span>
        </div>
        <span className="driver-ride-history-fare">₱35</span>
      </div>

      <div className="driver-ride-history-card">
        <div className="driver-ride-history-details">
          <span className="driver-ride-history-date">Today, 11:45 AM</span>
          <span className="driver-ride-history-name">Pedro Reyes</span>
          <span className="driver-ride-history-route">Home → Terminal</span>
        </div>
        <span className="driver-ride-history-fare">₱28</span>
      </div>

      <div className="driver-ride-history-card">
        <div className="driver-ride-history-details">
          <span className="driver-ride-history-date">Yesterday, 5:20 PM</span>
          <span className="driver-ride-history-name">Ana Cruz</span>
          <span className="driver-ride-history-route">SM Clark → Barangay Hall</span>
        </div>
        <span className="driver-ride-history-fare">₱45</span>
      </div>
    </div>
  );
};

export default RideHistory;
