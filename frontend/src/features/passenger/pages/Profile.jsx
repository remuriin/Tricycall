import { NavLink } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
  return (
    <>
      <div className = "profile-box">
        <img className = "profile-pic" src="" alt="" />
        <h3 className = "name">edsel pogi</h3>
        <p className = "contact-num">0909 080 0707</p>
        <div className = "options-box">
          <NavLink className = "nav-link-item" to = "">Saved Places</NavLink>
          <hr />
          <NavLink className = "nav-link-item" to = "">Payment Methods</NavLink>
          <hr />
          <NavLink className = "nav-link-item" to = "">Ride History</NavLink>
          <hr />
          <NavLink className = "nav-link-item" to = "">Safety</NavLink>
          <hr />
          <NavLink className = "nav-link-item" to = "">Settings</NavLink>
          <hr />
          <NavLink className = "nav-link-item" to = "">Help & Support</NavLink>
          <hr />
        </div>
        <button>LOG OUT</button>
      </div>
    </>
  );
};

export default Profile;
