import "./CancelRideConfirm.css";

const CancelRideConfirm = () => {
  return (
    <div className="driver-cancel-page">
      <div className="driver-cancel-card">
        <h2>Cancel this trip?</h2>
        <p className="driver-cancel-desc">
          Cancelling after accepting may affect your driver rating. Are you sure?
        </p>

        <button className="driver-cancel-no-btn">NO, CONTINUE</button>
        <button className="driver-cancel-yes-btn">YES, CANCEL TRIP</button>
      </div>
    </div>
  );
};

export default CancelRideConfirm;
