import "./TripComplete.css";

const TripComplete = () => {
  return (
    <div className="trip-complete-page">
      <div className="trip-complete-card">
        <h2>Trip Complete</h2>
        <p className="trip-complete-route">Pickup → Drop-off</p>
        <p className="trip-complete-meta">3.2 km · 12 mins</p>

        <p className="trip-complete-fare">Total Fare: <strong>₱38</strong></p>

        <p className="trip-complete-rate-label">Rate your driver</p>
        <div className="trip-complete-stars">
          <div className="trip-complete-star"></div>
          <div className="trip-complete-star"></div>
          <div className="trip-complete-star"></div>
          <div className="trip-complete-star"></div>
          <div className="trip-complete-star"></div>
        </div>

        <button className="trip-complete-submit-btn">SUBMIT RATING</button>
        <button className="trip-complete-report-btn">REPORT AN ISSUE</button>
      </div>
    </div>
  );
};

export default TripComplete;
