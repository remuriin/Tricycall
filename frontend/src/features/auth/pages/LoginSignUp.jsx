import { NavLink } from "react-router-dom";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <>
      <div className = "auth-page">
        <h1>welocm to login hashhsas</h1>
        <button>
          <NavLink to = "/passenger">login as passenger</NavLink>
        </button>
        <button>
          <NavLink to = "/driver">login as driver</NavLink>
        </button>
      </div>
    </>
  );
};

export default LoginSignUp;
