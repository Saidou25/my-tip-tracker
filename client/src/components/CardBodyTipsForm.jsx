import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import Button from "./Button";

import { useRef, useState } from "react";
import "./Card.css";

const CardBodyTipsForm = ({ fields }) => {
  const [error, setError] = useState(false);

  const form = useRef();

  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <form ref={form} role="form" className="form px-5">
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
                className="tips-input mb-3 mx-2"
                placeholder={field.placeholder}
                style={{ fontStyle: "oblique", paddingLeft: "3%" }}
              />
              <br />
              <br />
            </div>
          ))}
        <Button type="submit" disabled={true}>
          save
        </Button>
        {error && (
          <span className="text-danger">Oops, something went wrong...</span>
      )} 
      </form>
    </div>
  );
};
export default CardBodyTipsForm;
