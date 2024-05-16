import { NavLink } from "react-router-dom";

import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";
import CardBodyLogin from "./CardBodyLogin";
import CardBodySignup from "./CardBodySignup";
import CardBodyUpdate from "./CardBodyUpdate";

import "./Card.css";

const Card = ({ title, cardBodyTemplate = {}, footer, src }) => {
  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = (fields) => {
    switch (templateTitle) {
      case "signupData":
        return <CardBodySignup fields={fields} />;
      case "loginData":
        return <CardBodyLogin fields={fields} />;
      case "profile":
        return <CardBodyProfile fields={fields} src={src} />;
      case "tipsForm":
        return <CardBodyTipsForm fields={fields} />;
      case "update":
        return <CardBodyUpdate fields={fields} src={src} />;
      default:
        return <CardBodyDashboard fields={fields} cardBodyTemplate={cardBodyTemplate} />;
    }
  };

  return (
    <div className="card main-card bg-transparent" 
    // role="test-card"
    >
      <div className="card-title p-5">{title}</div>
      <div className="card-body wild">{renderFields(fields)}</div>
      <div className="card-footer p-5">
        {window.location.pathname === "/profile" ? (
          <NavLink to="/update">update</NavLink>
        ) : (
          <>{footer}</>
        )}
      </div>
    </div>
  );
};

export default Card;
