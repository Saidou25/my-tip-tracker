import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";

import "./Card.css";

const Card = ({ title, cardBodyTemplate, footer }) => {
  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = (fields) => {
    // switch case here 
    if (templateTitle === "dashboard") {
      return <CardBodyDashboard fields={fields} />;
    }

    if (templateTitle === "profile") {
      return <CardBodyProfile fields={fields} />;
    }

    if (templateTitle === "tipsForm") {
      return <CardBodyTipsForm fields={fields} />;
    }
  };

  return (
    <div className="card main-card bg-transparent">
      <div className="card-title">Day</div>
      <div className="card-body wild">{renderFields(fields)}</div>
      <div className="card-footer">Today's date</div>
    </div>
  );
};

export default Card;
