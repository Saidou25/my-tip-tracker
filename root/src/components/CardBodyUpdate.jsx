import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";

import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "./Button";

import "./Card.css";
import { useNavigate } from "react-router-dom";

const CardBodyUpdate = ({ fields }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  const form = useRef();

  const navigate = useNavigate();
  
  const currentUser = auth.currentUser;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: formState.displayName,
        photoURL: formState.photoURL,
        createdAt: currentUser.metadata.creationTime,
      });
    } catch (error) {
      console.log("An error occurred", error.message);
      setError("Oops, something went wrong.");
    } finally {
      console.log("profile updated!");
      navigate("/profile");
    }
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
  };

  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <UpdateProfilePicture handleUrl={handleUrl} />
      <form
        ref={form}
        // role="form"
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
