import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { auth, storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";

import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "./Button";

import "./Card.css";

const CardBodyUpdate = ({ fields }) => {
  const [downloadedURL, setDownloadedURL] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    workPlace: "",
    position: "",
    displayName: "",
    email: "",
    photoURL: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: formState.displayName,
      photoURL: formState.photoURL,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log("An error occurred", error.message);
        setError("Oops, something went wrong.");
      });
  };

  const handleUrl = (storageRef) => {
    if (storageRef) {
      const name = "photoURL";
      const value = storageRef;

      setFormState({
        ...formState,
        [name]: value,
      });
    }
    setDownloadedURL(storageRef);
  };

  const starsRef = ref(storage, "images/profilepic.jpg");
  useEffect(() => {
    // Create a reference with an initial file path and name
    console.log(starsRef);
    if (starsRef.path != "images/star-icon-13.jpg") {
      console.log("no starsRef", starsRef);
      return;
    }
    // Get the download URL
    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        if (url) {
          console.log("url", url);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError("Oops, something went wrong.");

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }, [starsRef]);

  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <UpdateProfilePicture handleUrl={handleUrl} />
      <form
        ref={form}
        role="form"
        className="form px-5"
        onSubmit={handleSubmit}
      >
        <br />
        {fields &&
          fields.map((field) => (
            <div className="col-12" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="form-label here mb-3"
                name={field.label}
              >
                {field.label}:
              </label>
              <br />
              <br />
              {field.label === "Tips brut" ? (
                <FaSackDollar
                  data-testid="fa-sack-dollar"
                  className="hum-icon-form"
                />
              ) : (
                <GiCoins data-testid="fa-gi-coins" className="hum-icon-form" />
              )}
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                inputMode="numeric"
                type={field.type}
                className="tips-input mb-3 mx-2 text-black"
                placeholder={field.placeholder}
                style={{ fontStyle: "oblique", paddingLeft: "3%" }}
                name={field.label}
                value={formState.field}
                onChange={handleChange}
                autoComplete="off"
              />
              <br />
              <br />
            </div>
          ))}
        <Button
          type="submit"
          className="button"
          disabled={false}
          loading={loading}
        >
          update
        </Button>
        {error && (
          <span className="text-danger" data-testid="oops">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};
export default CardBodyUpdate;
