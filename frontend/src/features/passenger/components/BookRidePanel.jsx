import "./BookRidePanel.css";

const BookRidePanel = () => {
  return (
    <div className="book-ride-panel">
      <h2>Book a Ride</h2>

      <div className="form-group">
        <label>Pickup Location</label>
        <input type="text" placeholder="Current location" />
      </div>

      <div className="form-group">
        <label>Drop-off Location</label>
        <input type="text" placeholder="Where to?" />
      </div>

      <p className="fare-estimate">Estimated fare: ₱30 – ₱45</p>

      <button className="book-ride-btn">BOOK A RIDE</button>
    </div>
  );
};

export default BookRidePanel;

