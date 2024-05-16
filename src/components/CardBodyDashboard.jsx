import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { titlesData } from "../data";

import "./Card.css";
import { useEffect, useState } from "react";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const titles = titlesData[0].titles;
 const [lastTipInput, setLastTipInput] = useState({});

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthTitle = months[new Date().getMonth()];

  // console.log("fileds", cardBodyTemplate);
  // const TableFields = cardBodyTemplate.tips;

  // Check if cardBodyTemplate and cardBodyTemplate.tips are defined before proceeding
  const TableFields =
    cardBodyTemplate && cardBodyTemplate.tips ? cardBodyTemplate.tips : [];

  if (TableFields.length > 0) {
    // Iterate over each item in the 'tips' array
    TableFields.forEach(function (tip) {
      // Check if 'createdAt' exists and is not empty
      if (tip.createdAt && tip.createdAt.seconds) {
        // Create a new Date object
        var date = new Date(
          tip.createdAt.seconds * 1000 +
            Math.round(tip.createdAt.nanoseconds / 1e6)
        );

        // Get the date components
        var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
        var day = ("0" + date.getDate()).slice(-2);
        var year = date.getFullYear();

        // Format the date as MM/DD/YYYY
        var formattedDate = month + "/" + day + "/" + year;

        // Update the 'createdAt' field with the formatted date
        tip.createdAt = formattedDate;
      }
    });
  }

  useEffect(() => {
    if (cardBodyTemplate) {
      console.log("card body template", cardBodyTemplate.tips);
      const tips = cardBodyTemplate.tips;
      if (tips) {
      //  setLastTipInput(tips[tips.length - 1]); // Sets the fields value to the last user input
      const lastUserTipInput = tips[tips.length - 1];
      console.log("lastUserTipInput", lastUserTipInput.date)
      }
    }
  }, [cardBodyTemplate]);

  return (
    <>
      <h5
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {monthTitle}
      </h5>
      <br />
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
          {TableFields &&
            TableFields.map((field, index) => (
              <tr key={index} className="trtr">
                <th className="hum-item">
                  <span>{field.dayName}</span>
                  <br />
                  <span>{field.createdAt.toString()}</span>
                </th>
                <th>
                  <FaSackDollar className="hum-icon" />
                  <span className="ps-3">{field.TipsBrut}</span>
                </th>
                <th>
                  <GiCoins className="hum-icon" />
                  <span className="ps-3">{field.TipsNet}</span>
                </th>
              </tr>
            ))}
        </thead>
      </table>
      <br />
      <br />
      <br />
    </>
  );
};
export default CardBodyDashboard;
