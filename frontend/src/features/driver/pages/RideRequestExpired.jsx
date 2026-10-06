import "./RideRequestExpired.css";

const RideRequestExpired = () => {
  return (
    <div className="expired-page">
      <button className="expired-back-btn">←</button>

      <div className="expired-content">
        <div className="expired-icon">✕</div>

        <h2>Request Expired</h2>
        <p className="expired-desc">
          This ride request has timed out and been reassigned to another driver.
        </p>

        <button className="expired-home-btn">BACK TO HOME</button>
      </div>
    </div>
  );
};

export default RideRequestExpired;
