import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { deleteUser, updateProfile } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { NavLink } from "react-router-dom";
import { profile } from "../data";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import TitleBox from "../components/TitleBox";
import Button from "../components/Button";

import "./Profile.css";

const Profile = () => {
  // const [photoURL, setPhotoURL] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const storage = getStorage();
  // Get current user
  const user = auth.currentUser;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    // const uid = user.uid;
  }

  const getCollection = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  const addAvatarToProfile = (downloadURL) => {
    updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const uploadProfilePicture = (file) => {

    const storage = getStorage();
    const storageRef = ref(storage, `${user.uid}/rivers.jpg/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("Success, file available at", downloadURL);
          setDownloadURL(downloadURL)
          addAvatarToProfile(downloadURL);
        });
      }
    );
  };

  const addCollection = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e.message);
    }
  };

  const deleteProfile = () => {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        console.log("User deleted.");
      })
      .catch((error) => {
        console.log(error.message);
        // ...
      });
  };

  // useEffect(() => {
  //   if (user?.photoURL) {
  //     // console.log(user)
  //     setPhotoURL(user.photoURL);
  //   }
  // }, [user]);

  return (
    <div className="grad1">
      <NavLink className="nav-item" to="/">
        <div className="logofor-pages">GF</div>
      </NavLink>
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Button onClick={deleteProfile}>delete profile</Button>
        <Button onClick={addCollection}>add collection</Button>
        <Button onClick={getCollection}>get collection</Button>
        {/* <Button onClick={uploadProfilePicture}>profile picture</Button> */}
        {/* <input type="files" onClick={choosePicture}/> */}
        <div>
          {" "}
          <form onSubmit={uploadProfilePicture}>
            <label htmlFor="choose">Select files:</label>
            <input
              type="file"
              id="choose"
              name="choose"
              multiple
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  uploadProfilePicture(e.target.files[0]);
                }
              }}
            />
            <br />
            <br />
            <input type="submit" style={{ color: "black" }} />
          </form>
        </div>
        <Card
          title="Profile title"
          footer="Profile footer"
          cardBodyTemplate={profile}
          src={downloadURL}
        />
      </div>
    </div>
  );
};
export default Profile;
