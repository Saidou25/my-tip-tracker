import { deleteUser } from "firebase/auth";
import { auth, db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { update } from "../data";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TitleBox from "../components/TitleBox";
import Button from "../components/Button";

const Update = () => {
  const user = auth.currentUser;

  const deleteFirestoreUser = async () => {
    try {
      await deleteDoc(doc(db, "users", user.uid));
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log("success deleting firestore user");
    }
  };

  const deleteCurrentUser = () => {
    console.log(user.uid);

    deleteUser(user)
      .then(() => {
        console.log("User deleted.");
      })
      .catch((error) => {
        console.log("An error ocurred.", error.message);
      });
  };

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Card
          role="card"
          title={new Date().toString()}
          footer="Enter tips footer"
          cardBodyTemplate={update}
          data-testid="card-component"
        />
      </div>
      <Button
        type="button"
        onClick={(e) => {
          deleteCurrentUser(e);
          deleteFirestoreUser(e);
        }}
      >
        delete your account here.
      </Button>
    </div>
  );
};

export default Update;
