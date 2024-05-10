import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { dashboardData } from "../data";
import { IoPower } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TitleBox from "../components/TitleBox";

import "./Dashboard.css";

const Dashboard = () => {
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(`User with the uid ${uid} is loggedin`)
      // ...
    } else {
      console.log("No user loggedin")
      // User is signed out
      // ...
    }
  });

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.");
      });
  };

  return (
    <div className="grad1">
      <IoPower className="on-off" onClick={logout} />
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Card
          className="p-0 m-0 g-0"
          title="Dashboard title"
          footer="Dashboard footer"
          cardBodyTemplate={dashboardData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
