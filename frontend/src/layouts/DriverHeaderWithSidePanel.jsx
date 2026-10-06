import { Outlet } from "react-router-dom";
import "./DriverHeaderWithSidePanel.css";

const DriverHeaderWithSidePanel = () => {
  return (
    <div className="driver-layout">
      <header className="driver-header">
        <h3>Tricycall Driver</h3>
        <div className="driver-profile-icon" />
      </header>
      <div className="driver-content">
        <main className="driver-outlet-box">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DriverHeaderWithSidePanel;

