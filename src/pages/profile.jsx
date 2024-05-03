import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { profileTemplate } from "../data";

const Profile = () => {
  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <p className="paragraph">Any update?</p>
        </div>
        <Card
          title="Profile title"
          footer="Profile footer"
          cardBodyTemplate={profileTemplate}
        />
      </div>
    </div>
  );
};
export default Profile;
