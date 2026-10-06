import "./EarningsPayout.css";

const EarningsPayout = () => {
  return (
    <div className="earnings-page">
      <div className="earnings-summary">
        <h3>Earnings Summary</h3>
        <div className="earnings-row">
          <span className="earnings-label">Today</span>
          <span className="earnings-amount">₱420</span>
        </div>
        <div className="earnings-row">
          <span className="earnings-label">This Week</span>
          <span className="earnings-amount">₱2,340</span>
        </div>
        <div className="earnings-row">
          <span className="earnings-label">This Month</span>
          <span className="earnings-amount">₱8,150</span>
        </div>
      </div>

      <h4 className="earnings-section-title">RECENT TRIPS</h4>

      <div className="earnings-trip-card">
        <div className="earnings-trip-info">
          <span className="earnings-trip-name">Maria Santos</span>
          <span className="earnings-trip-route">Rizal St. → Public Market</span>
        </div>
        <span className="earnings-trip-fare">₱35</span>
      </div>

      <div className="earnings-trip-card">
        <div className="earnings-trip-info">
          <span className="earnings-trip-name">Pedro Reyes</span>
          <span className="earnings-trip-route">Home → Terminal</span>
        </div>
        <span className="earnings-trip-fare">₱28</span>
      </div>

      <div className="earnings-trip-card">
        <div className="earnings-trip-info">
          <span className="earnings-trip-name">Ana Cruz</span>
          <span className="earnings-trip-route">SM Clark → Barangay Hall</span>
        </div>
        <span className="earnings-trip-fare">₱45</span>
      </div>

      <h4 className="earnings-section-title">PAYOUT METHOD</h4>

      <div className="earnings-payout-method">
        <span>GCash **** 4521</span>
        <button className="earnings-change-btn">Change</button>
      </div>

      <button className="earnings-cashout-btn">CASH OUT</button>
    </div>
  );
};

export default EarningsPayout;
