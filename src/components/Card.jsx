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
                    <th>{field.brut}</th>
                    <th>
                      <LuBadgeDollarSign syle={{ color: "yellow" }} />
                      <br />
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
          <form className="form p-5">
            {fields &&
              fields.map((field) => (
                <div className="col-12" key={field.label}>
                  <label className="form-label here mb-3" name={field.label}>
                    {field.label}
                  </label>
                  <br />
                  <input inputMode="numeric" type="number" className="mb-3" />
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
