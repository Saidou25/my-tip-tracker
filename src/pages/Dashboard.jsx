import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { dashboardData } from "../data";
import { IoPower } from "react-icons/io5";

import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TitleBox from "../components/TitleBox";

import "./Dashboard.css";

const Dashboard = () => {
  const [earnings, setEarnings] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);

  // console.log(userTipsData);

  const currentUser = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(`User with the uid ${uid} is loggedin`);
    } else {
      console.log("No user loggedin");
    }
  });

  const inconue = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dataArray = []; // Initialize an array to store the stringified objects
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // console.log(`${doc.id} => ${JSON.stringify(data)}`);
      dataArray.push(data); // Push the data object into the dataArray
    });
    console.log(dataArray);
    // setEarnings(dataArray);
    // console.log("querySnapshot", querySnapshot);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log("An error happened.", error.message);
      });
  };

  useEffect(() => {
    if (earnings) {
      // console.log(earnings);
      for (let earning of earnings) {
        // console.log("earning", earning);
        if (earning.email === currentUser.email) {
          // console.log("it is equal", earning);
          setUserTipsData(earning);
        } else {
          console.log("it is not equal");
        }
      }
    }
  }, [earnings, currentUser]);

  return (
    <div className="grad1">
      <IoPower className="on-off" onClick={logout} />
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        {/* {userTipsData && <>{userTipsData}</>} */}
        {/* {earnings &&
          earnings?.map((earning, index) => (
            <div key={index}>
              <span>displayName: {earning.displayName}</span>
              <br />
              <br />
              <span>email: {earning.email}</span>
              <br />
              <br />
              <span>brut: {earning.TipsBrut}</span>
              <br />
              <br />
              <span>net: {earning.TipsNet}</span>
              <br />
              <br />
            </div>
          ))}
        <h1>Hehe</h1> */}
        <Card
          className="p-0 m-0 g-0"
          title="Dashboard title"
          footer="Dashboard footer"
          cardBodyTemplate={dashboardData}
        />
      </div>
      <Button type="button" onClick={inconue}>
        inconue
      </Button>
    </div>
  );
};

export default Dashboard;
