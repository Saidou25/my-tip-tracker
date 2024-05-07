import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import Button from "./Button";

import "./Card.css";

const CardBodyTipsForm = ({ fields }) => {
  
  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <form className="form px-5">
        <br />
        {fields &&
          fields.map((field) => (
            <div className="col-12" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="form-label here mb-3"
                name={field.label}
                id={field.label}
              >
                {field.label}:
              </label>
              <br />
              <br />
              {field.label === "Tips brut" ? (
                <FaSackDollar className="hum-icon-form" />
              ) : (
                <GiCoins className="hum-icon-form" />
              )}
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                inputMode="numeric"
                type="number"
                className="tips-input mb-3 mx-2"
                placeholder="please enter tips..."
                style={{ fontStyle: "oblique", paddingLeft: "3%" }}
              />
              <br />
              <br />
            </div>
          ))}
        <Button type="submit">save</Button>
      </form>
    </div>
  );
};
export default CardBodyTipsForm;
