import { NavLink } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="container-fluid grad1">
      <h1 className="logo">GF</h1>
      <span>Server' s tips tracker</span><br />
      <NavLink className="nav-item" to="/Dashboard">
        <span className="login">login</span>
      </NavLink>
    </div>
  );
};
export default LandingPage;


