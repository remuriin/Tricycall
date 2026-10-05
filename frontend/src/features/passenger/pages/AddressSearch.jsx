import AddressSearchPanel from "../components/AddressSearchPanel";
import "./AddressSearch.css";

const AddressSearch = () => {
  return (
    <div className="address-search-page">
      <div className="map-view">
        <span>MAP VIEW</span>
      </div>
      <AddressSearchPanel />
    </div>
  );
};

export default AddressSearch;
