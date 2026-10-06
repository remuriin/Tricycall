import DriverHomeSidePanel from "../components/DriverHomeSidePanel";
import "./Home.css";

const Home = () => {
  return (
    <div className="driver-home-page">
      <div className="map-view">
        <span>YOUR LOCATION</span>
      </div>
      <DriverHomeSidePanel />
    </div>
  );
};

export default Home;
