import "./ArrivedAtPickupPanel.css";

const ArrivedAtPickupPanel = () => {
  return (
    <div className="arrived-panel">
      <h2>You've Arrived</h2>
      <p className="arrived-panel-subtitle">Waiting for Maria Santos</p>

      <div className="arrived-panel-card">
        <span className="arrived-panel-name">Maria Santos</span>
        <span className="arrived-panel-address">Rizal St. corner Mabini St.</span>
      </div>

      <button className="arrived-panel-call-btn">CALL PASSENGER</button>
      <button className="arrived-panel-start-btn">START TRIP</button>
    </div>
  );
};

export default ArrivedAtPickupPanel;

