import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import "./Card.css";

const CardBodyLogin = ({ fields }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError("");
    setSuccess("");
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.email || !formState.password) {
      setError("All fields are required");
      return;
    }
    const email = formState.email;
    const password = formState.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        setSuccess("You are now Loggedin");
        setFormState({ email: "", password: "" });
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
      });
  };

  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <form className="form px-5" onSubmit={handleSubmit}>
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
              {field.label === "Tips brut" && (
                <FaSackDollar
                  data-testid="fa-sack-dollar"
                  className="hum-icon-form"
                />
              )}{" "}
              {field.label === "Tips net" && (
                <GiCoins data-testid="fa-gi-coins" className="hum-icon-form" />
              )}
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                // inputMode="numeric"
                type={field.type}
                className="tips-input mb-3 mx-2"
                placeholder="placeholder"
                // placeholder={field.placeholder}
                style={{
                  fontStyle: "oblique",
                  paddingLeft: "3%",
                  color: "black",
                }}
                autoComplete="on"
                name={field.label}
                value={formState.field?.label}
                onChange={handleChange}
              />
              <br />
              <br />
            </div>
          ))}
        <Button
          type="submit"
          className="button"
          disabled={false}

          //   loading={loading}
        >
          save
        </Button>
        {error && (
          <span className="text-danger" data-testid="oops">
            Oops, something went wrong...
          </span>
        )}
      </form>
    </div>
  );
};
export default CardBodyLogin;
