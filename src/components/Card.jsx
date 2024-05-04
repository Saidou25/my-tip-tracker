import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import Button from "./Button";
import "./Card.css";

const Card = ({ title, cardBodyTemplate, footer }) => {
  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = (fields) => {
    if (templateTitle === "weekly") {
      return (
        <>
          <table className="table p-0 m-0 g-0">
            <thead className="here">
              <tr className="trtr">
                <th className="hum">
                  <p>date</p>
                </th>
                <th className="hum">
                  <p>shift</p>
                </th>
                <th className="hum">tips brut</th>
                <th className="hum">tips net</th>
              </tr>
              {fields &&
                fields.map((field, index) => (
                  <tr key={index} className="trtr">
                    <th>
                      <span>{field.day}</span>
                      <br />
                      <span>{field.date}</span>
                    </th>
                    <th>{field.shift}</th>
                    <th>
                      <FaSackDollar />
                      {field.brut}
                    </th>
                    <th>
                      <GiCoins />
                      <span>{field.net}</span>
                    </th>
                  </tr>
                ))}
            </thead>
          </table>
        </>
      );
    }

    if (templateTitle === "profileTemplate") {
      return (
        <>
          <div className="row you p-5 g-0">
            {fields &&
              fields.map((field) => (
                <section key={field.workPlace} className="here">
                  <p className="col-12">workPlace: {field.workPlace}</p>
                  <p className="col-12">position: {field.position}</p>
                  <p className="col-12">firstname: {field.firstname}</p>
                </section>
              ))}
          </div>
        </>
      );
    }

    if (templateTitle === "tipsForm") {
      return (
        <div className="row you tips g-0">
          <form className="form px-5">
            <br />
            {fields &&
              fields.map((field) => (
                <div className="col-12" key={field.label}>
                  <label className="form-label here mb-3" name={field.label}>
                    {field.label}:
                  </label>
                  <br />
                  <br />
                  {field.label === "tips brut" ? <FaSackDollar /> : <GiCoins />}
                  <input
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
    }
  };

  return (
    <>
      <div className="card main-card bg-transparent">
        <div className="card-title">Day</div>
        <div className="card-body wild">{renderFields(fields)}</div>
        <div className="card-footer">Today's date</div>
      </div>
    </>
  );
};

export default Card;
