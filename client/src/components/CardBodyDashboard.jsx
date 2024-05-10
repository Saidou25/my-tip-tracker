import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { titlesData } from "../data";

import "./Card.css";

const CardBodyDashboard = ({ fields }) => {
  const titles = titlesData[0].titles;
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[new Date().getMonth()]

  return (
    <>
    <h5 style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>{month}</h5><br />
      <table className="you g-0 m-0 p-0">
        <thead className="here">
          <tr className="trtr py-2">
            {titles &&
              titles.map((title) => (
                <th className="hum" key={title}>
                  <span>{title}</span>
                </th>
              ))}
              
          </tr>
          {fields &&
            fields.map((field, index) => (
              <tr key={index} className="trtr">
                <th className="hum-item">
                  <span>{field.day}</span>
                  <br />
                  <span>{field.date}</span>
                </th>
                <th className="hum-item">{field.shift}</th>
                <th>
                  <FaSackDollar className="hum-icon" />
                  <span className="ps-3">{field.brut}</span>
                </th>
                <th>
                  <GiCoins className="hum-icon" />
                  <span className="ps-3">{field.net}</span>
                </th>
              </tr>
            ))}
        </thead>
      </table>
      <br />
      <br />
      <br />
      <div>
        {" "}
        <table className="you g-0 m-0 p-0">
          <thead className="here">
            <tr className="trtr py-2">
              {/* {titlesData &&
          titlesData.titles[0].map((title) => (
          <th className="hum px-3">
            <span>{title.date}</span>
          </th>

          ))}  */}
              <th className="hum px-3">
              <span>date</span>
            </th>
            <th className="hum">
              <span>shift</span>
            </th>
            <th className="hum">brut</th>
            <th className="hum">net</th>
            </tr>
            {fields &&
              fields.map((field, index) => (
                <tr key={index} className="trtr">
                  <th className="hum-item px-3">
                    <span>{field.day}</span>
                    <br />
                    <span>{field.date}</span>
                  </th>
                  <th className="hum-item">{field.shift}</th>
                  <th>
                    <FaSackDollar className="hum-icon" />
                    <span className="ps-3">{field.brut}</span>
                  </th>
                  <th>
                    <GiCoins className="hum-icon" />
                    <span className="ps-3">{field.net}</span>
                  </th>
                </tr>
              ))}
          </thead>
        </table>
      </div>
    </>
  );
};
export default CardBodyDashboard;
