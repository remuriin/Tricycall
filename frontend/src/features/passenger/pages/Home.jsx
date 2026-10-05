import BookRidePanel from "../components/BookRidePanel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="map-view">
        <span>MAP VIEW</span>
      </div>
      <BookRidePanel />
    </div>
  );
};

export default Home;