import "./Safety.css";

const Safety = () => {
  return (
    <div className="safety-page">
      <div className="safety-header">
        <button className="safety-back-btn">←</button>
        <h2>Safety</h2>
      </div>

      <div className="safety-content">
        <div className="safety-driver-card">
          <span className="safety-driver-name">Juan Dela Cruz</span>
          <span className="safety-driver-meta">ABC 1234 · Trip in progress</span>
        </div>

        <div className="safety-sos-btn">SOS</div>
        <p className="safety-sos-desc">
          Press and hold to alert emergency contacts and Tricycall support.
        </p>

        <button className="safety-share-btn">SHARE TRIP STATUS</button>
        <button className="safety-call-btn">CALL EMERGENCY HOTLINE</button>
      </div>
    </div>
  );
};

export default Safety;
