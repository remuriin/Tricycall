import "./Profile.css";

const Profile = () => {
  return (
    <div className="driver-profile-page">
      <div className="driver-profile-avatar" />
      <h3 className="driver-profile-name">Juan Dela Cruz</h3>
      <p className="driver-profile-meta">★ 4.8 · 1,204 trips</p>

      <div className="driver-profile-menu">
        <span className="driver-profile-menu-item">Vehicle Details</span>
        <hr />
        <span className="driver-profile-menu-item">Documents</span>
        <hr />
        <span className="driver-profile-menu-item">Earnings & Payout</span>
        <hr />
        <span className="driver-profile-menu-item">Safety</span>
        <hr />
        <span className="driver-profile-menu-item">Settings</span>
        <hr />
        <span className="driver-profile-menu-item">Help & Support</span>
        <hr />
      </div>

      <button className="driver-profile-logout-btn">LOG OUT</button>
    </div>
  );
};

export default Profile;
