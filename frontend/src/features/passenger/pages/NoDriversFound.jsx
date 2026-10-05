import "./NoDriversFound.css";

const NoDriversFound = () => {
  return (
    <div className="no-drivers-page">
      <button className="no-drivers-back-btn">←</button>

      <div className="no-drivers-content">
        <div className="no-drivers-icon">!</div>

        <h2>No Drivers Found</h2>
        <p className="no-drivers-subtitle">
          We couldn't find a driver nearby. Try again or adjust your pickup location.
        </p>

        <button className="no-drivers-try-btn">TRY AGAIN</button>
        <button className="no-drivers-cancel-btn">CANCEL REQUEST</button>
      </div>
    </div>
  );
};

export default NoDriversFound;
