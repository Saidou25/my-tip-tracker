import { NavLink } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="grad1">
      <h1>Hello Sy</h1>
      <NavLink to="/Dashboard">start</NavLink>
    </div>
  );
};
export default LandingPage;
