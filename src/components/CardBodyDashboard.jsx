import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import "./Card.css";

const CardBodyDashboard = ({ fields }) => {
  return (
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
  );
};
export default CardBodyDashboard;
