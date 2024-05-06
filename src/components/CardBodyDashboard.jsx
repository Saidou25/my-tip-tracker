import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import "./Card.css";

const CardBodyDashboard = ({ fields }) => {
  return (
    <table className="you g-0 m-0 p-0">
      <thead className="here">
        <tr className="trtr py-2">
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
              <th 
              // style={{ display: "flex", alignItems: "center"}}
              >
                <GiCoins className="hum-icon" />
                <span className="ps-3"
                // style={{ display: "flex", alignItems: "center"}}
                >
                  {field.net}
                </span>
              </th>
            </tr>
          ))}
      </thead>
    </table>
  );
};
export default CardBodyDashboard;
