import "./Safety.css";

const Safety = () => {
  return (
    <div className="driver-safety-page">
      <div className="driver-safety-header">
        <button className="driver-safety-back-btn">←</button>
        <h2>Safety</h2>
      </div>

      <div className="driver-safety-content">
        <div className="driver-safety-passenger-card">
          <span className="driver-safety-passenger-name">Maria Santos</span>
          <span className="driver-safety-passenger-meta">Trip in progress</span>
        </div>

        <div className="driver-safety-sos-btn">SOS</div>
        <p className="driver-safety-sos-desc">
          Press and hold to alert emergency contacts and Tricycall support.
        </p>

        <button className="driver-safety-share-btn">SHARE TRIP STATUS</button>
        <button className="driver-safety-call-btn">CALL EMERGENCY HOTLINE</button>
      </div>
    </div>
  );
};

export default Safety;
