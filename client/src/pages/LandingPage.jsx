import { NavLink, Outlet } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container-fluid grad1">
      <NavLink to="/" style={{ textDecoration: "none" }} >
        <h1 className="logo">GF</h1>
        <br />
      </NavLink>
      <span>Server' s tips tracker</span>
      <br />
      <ul className="row ul-row">
        <li className="col-6">
          <NavLink className="nav-item" to="login">
            <span className="login">login</span>
          </NavLink>
        </li>
        <li className="col-6">
          <NavLink className="nav-item" to="signup">
            <span className="login">signup</span>
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default LandingPage;
