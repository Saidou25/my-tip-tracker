import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { useState } from "react";

import Button from "./Button";

import "./Card.css";

const CardBodySignup = ({ fields }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

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
      setError("All fields are required...");
      return;
    }
    const email = formState.email;
    const password = formState.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setSuccess("Congratulation Your account has been created...");
        setFormState({ email: "", password: "" });
        navigate("/login");
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
                inputMode="numeric"
                type={field.type}
                className="tips-input mb-3 mx-2"
                placeholder={field.placeholder}
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
            </div>
          ))}
        <Button
          type="submit"
          className="button"
          disabled={false}
          //   onClick={handleSubmit}
          //   loading={loading}
        >
          save
        </Button>
        {success && <span className="text-success">{success}</span>}
        {error && (
          <span className="text-danger" data-testid="oops">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};
export default CardBodySignup;
