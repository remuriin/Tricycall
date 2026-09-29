import { Outlet, NavLink } from "react-router-dom";
import "./PassengerLayoutHeader.css";
import SidePanel from '../features/passenger/components/SidePanel'

const PassengerLayoutHeader = () => {
  return (
    <div className="passenger-layout">
      <header className="header">
        <h3>Tricycall</h3>
        <nav className="nav-box">
          <NavLink to="/passenger/home">Home</NavLink>
          <NavLink to="/passenger/my-rides">My Rides</NavLink>
          <NavLink to="/passenger/profile">Profile</NavLink>
        </nav>
      </header>
      <div className="content">
        <main className="outlet-box">
          <h3>dito papasok yung passenger pages (depende sa feature)</h3>
          <Outlet />
        </main>
        <SidePanel />
      </div>
    </div>
  );
};

export default PassengerLayoutHeader;
