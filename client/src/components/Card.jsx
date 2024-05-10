import { auth } from "../firebase";
import emptyAvatar from "../assets/profileicon.png";
import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";
import CardBodyLogin from "./CardBodyLogin";
import CardBodySignup from "./CardBodySignup";

import "./Card.css";
import { useEffect, useState } from "react";

const Card = ({ title, cardBodyTemplate = {}, footer, src }) => {
  const [avatarURL, SetAvatarURL] = useState(null);

  const { templateTitle, fields } = cardBodyTemplate;
  const user = auth.currentUser;

  const renderFields = (fields) => {
    switch (templateTitle) {
      case "signupData":
        return <CardBodySignup fields={fields} />;
      case "loginData":
        return <CardBodyLogin fields={fields} />;
      case "profile":
        return <CardBodyProfile fields={fields} src={src? src : emptyAvatar} />;
      case "tipsForm":
        return <CardBodyTipsForm fields={fields} />;
      default:
        return <CardBodyDashboard fields={fields} />;
    }
  };

  useEffect(() => {
    if (user?.photoURL) {
      SetAvatarURL(user?.photoURL);
    }
  }, [user]);

  return (
    <div className="card main-card bg-transparent" role="card">
      <div className="card-title p-5">{title}</div>
      {/* Look into <CardBody renderFields={renderFields(fields)} /> */}
      <div className="card-body wild">{renderFields(fields)}</div>
      <div className="card-footer p-5">{footer}</div>
    </div>
  );
};

export default Card;
