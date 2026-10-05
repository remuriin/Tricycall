import "./AddressSearchPanel.css";

const AddressSearchPanel = () => {
  return (
    <div className="address-search-panel">
      <button className="back-btn">←</button>

      <input
        type="text"
        className="search-input"
        placeholder="Where to?"
      />

      <div className="option-item">
        <input type="checkbox" />
        <span>Use Current Location</span>
      </div>

      <hr />

      <div className="section">
        <h4 className="section-title">SAVED PLACES</h4>

        <div className="option-item">
          <input type="checkbox" />
          <div className="option-details">
            <span className="option-name">Home</span>
            <span className="option-address">123 Sampaguita St., Angeles City</span>
          </div>
        </div>

        <hr />

        <div className="option-item">
          <input type="checkbox" />
          <div className="option-details">
            <span className="option-name">Work</span>
            <span className="option-address">SM City Clark, Angeles City</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="section">
        <h4 className="section-title">RECENT</h4>

        <div className="option-item">
          <input type="checkbox" />
          <span>Rizal St. corner Mabini St.</span>
        </div>

        <hr />

        <div className="option-item">
          <input type="checkbox" />
          <span>Public Market</span>
        </div>
      </div>
    </div>
  );
};

export default AddressSearchPanel;

