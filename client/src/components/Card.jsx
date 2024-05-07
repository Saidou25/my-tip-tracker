import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";

import "./Card.css";

const Card = ({ title, cardBodyTemplate={}, footer }) => {
  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = (fields) => {
    switch (templateTitle) {
      case "profile":
        return <CardBodyProfile fields={fields} />;
      case "tipsForm":
        return <CardBodyTipsForm fields={fields} />;
      default:
        return <CardBodyDashboard fields={fields} />;
    }
  };

  return (
    <div className="card main-card bg-transparent">
      <div className="card-title">{title}</div>
      <div className="card-body wild">{renderFields(fields)}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
