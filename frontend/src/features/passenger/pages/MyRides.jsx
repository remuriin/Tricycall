import "./MyRides.css";

const MyRides = () => {
  return (
    <div className="my-rides-page">
      <h2>My Rides</h2>

      {/*placeholder cards*/}
      <div className="my-rides-card">
        <div className="my-rides-details">
          <span className="my-rides-date">Today, 2:30 PM</span>
          <span className="my-rides-route">Home → SM City Clark</span>
          <span className="my-rides-fare">₱38</span>
        </div>
        <span className="my-rides-status">Completed</span>
      </div>

      <div className="my-rides-card">
        <div className="my-rides-details">
          <span className="my-rides-date">Yesterday, 6:15 PM</span>
          <span className="my-rides-route">Public Market → Home</span>
          <span className="my-rides-fare">₱42</span>
        </div>
        <span className="my-rides-status">Completed</span>
      </div>

      <div className="my-rides-card">
        <div className="my-rides-details">
          <span className="my-rides-date">Sep 20, 9:00 AM</span>
          <span className="my-rides-route">Home → Work</span>
          <span className="my-rides-fare">₱35</span>
        </div>
        <span className="my-rides-status">Completed</span>
      </div>
    </div>
  );
};

export default MyRides;
