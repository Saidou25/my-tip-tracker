import { auth } from "../firebase";
import { NavLink } from "react-router-dom";
import { profile } from "../data";

import Card from "../components/Card";
import emptyAvatar from "../assets/profileicon.png";
import Navbar from "../components/Navbar";
import TitleBox from "../components/TitleBox";

import "./Profile.css";

const Profile = () => {
  const currentUser = auth.currentUser;

  return (
    <div className="grad1">
      <NavLink className="nav-item" to="/">
        <div className="logofor-pages">GF</div>
      </NavLink>
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Card
          title="Profile title"
          footer="Profile footer"
          cardBodyTemplate={profile}
          src={currentUser?.photoURL ? currentUser.photoURL : emptyAvatar}
        />
      </div>
    </div>
  );
};
export default Profile;
