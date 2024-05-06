// import { NavLink } from "react-router-dom";
import { profile } from "../data";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="grad1">
      {/* <NavLink className="nav-item" to="/">
        <div className="logofor-pages">GF</div>
      </NavLink> */}
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <span className="paragraph">Any update?</span>
        </div>
        <Card
          title="Profile title"
          footer="Profile footer"
          cardBodyTemplate={profile}
        />
      </div>
    </div>
  );
};
export default Profile;
