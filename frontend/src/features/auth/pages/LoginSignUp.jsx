import { NavLink } from "react-router-dom";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <>
      <div className="auth-page">
        <h1>welocm to login hashhsas</h1>
        <NavLink to="/passenger" className="btn">
          Login as passenger
        </NavLink>
        <NavLink to="/driver" className="btn">
          Login as driver
        </NavLink>
      </div>
    </>
  );
};

export default LoginSignUp;