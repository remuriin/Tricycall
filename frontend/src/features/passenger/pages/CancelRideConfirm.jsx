import "./CancelRideConfirm.css";

const CancelRideConfirm = () => {
  return (
    <div className="cancel-ride-page">
      <div className="cancel-ride-card">
        <h2>Cancel this ride?</h2>
        <p className="cancel-ride-desc">
          Your driver is already on the way. Cancelling now may incur a small fee.
        </p>

        <button className="cancel-ride-keep-btn">NO, KEEP RIDE</button>
        <button className="cancel-ride-yes-btn">YES, CANCEL RIDE</button>
      </div>
    </div>
  );
};

export default CancelRideConfirm;
