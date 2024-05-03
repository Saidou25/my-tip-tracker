import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { profileTemplate } from "../data";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <p className="paragraph">This is your roundup</p>
        </div>
      <Card
        title="Profile title"
        footer="Profile footer"
        cardBodyTemplate={profileTemplate}
      />
      </div>
    </>
  );
};
export default Profile;
