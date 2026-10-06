import ArrivedAtPickupPanel from "../components/ArrivedAtPickupPanel";
import "./ArrivedAtPickup.css";

const ArrivedAtPickup = () => {
  return (
    <div className="arrived-page">
      <div className="map-view">
        <span>ARRIVED AT PICKUP</span>
      </div>
      <ArrivedAtPickupPanel />
    </div>
  );
};

export default ArrivedAtPickup;
