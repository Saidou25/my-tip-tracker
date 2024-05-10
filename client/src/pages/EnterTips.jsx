import { tipsForm } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TitleBox from "../components/TitleBox";

const EnterTips = () => {

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Card
          role="card"
          title={new Date().toString()}
          footer="Enter tips footer"
          cardBodyTemplate={tipsForm}
          data-testid="card-component"
        />
      </div>
    </div>
  );
};

export default EnterTips;
