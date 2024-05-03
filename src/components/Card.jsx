import React from "react";
import { LuBadgeDollarSign } from "react-icons/lu";
import "./Card.css";

const Card = ({ title, cardBodyTemplate, footer }) => {
  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = (fields) => {
    if (templateTitle === "weekly") {
      return (
        <>
        <table className="table p-0 m-0 g-0">
          <thead className="here">
            <tr>
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
                <tr
                  key={index}
                >
                  <th>
                    <span>{field.day}</span><br />
                    <span>{field.date}</span>
                  </th>
                  <th>{field.shift}</th>
                  <th>{field.brut}</th>
                 <th><LuBadgeDollarSign syle={{ color: "yellow" }} /><br />
                  <span>{field.net}</span></th>
                </tr>
              ))}
          </thead>
        </table>
        </> );
    }

    if (templateTitle === "profileTemplate") {
      return (
        <div className="row px-5 g-0">
          {fields &&
            fields.map((field) => (
              <>
                <p className="col-12" key={field.workPlace}>
                  workPlace: {field.workPlace}
                </p>
                <p className="col-12" key={field.position}>
                  position: {field.position}
                </p>
                <p className="col-12" key={field.firstname}>
                  firstname: {field.firstname}
                </p>
              </>
            ))}
        </div>
      );
    }

    if (templateTitle === "tipsForm") {
      return (
        <div className="row g-0">
          <form className="form px-5">
            {fields &&
              fields.map((field) => (
                <div className="col-12" key={field.label}>
                  <label className="form-label mb-3" name={field.label}>
                    {field.label}
                  </label>
                  <br />
                  <input className="mb-3" placeholder={field.placeholder} />
                  <br />
                </div>
              ))}
            <button className="button my-3">save</button>
          </form>
        </div>
      );
    }
  };

  return (
    <>
      <div className="card main-card bg-transparent">
        <div className="card-title">{title}</div>
        <div className="card-body wild">{renderFields(fields)}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </>
  );
};

export default Card;
