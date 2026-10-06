import "./DriverHomeSidePanel.css";

const DriverHomeSidePanel = () => {
  return (
    <div className="driver-home-panel">
      <div className="driver-home-status">
        <span>You are Online</span>
        <div className="driver-home-toggle">
          <div className="driver-home-toggle-knob" />
        </div>
      </div>

      <div className="driver-home-summary">
        <h4>Today's Summary</h4>
        <p>Trips Completed: <strong>8</strong></p>
        <p>Earnings Total: <strong>₱420</strong></p>
        <p>Hours Online: <strong>5h 20m</strong></p>
      </div>
    </div>
  );
};

export default DriverHomeSidePanel;

