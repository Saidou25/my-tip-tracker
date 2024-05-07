import { tipsForm } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


const EnterTips = () => {
  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <span className="paragraph">Ready to enter your tips?</span>
        </div>
        <Card
          title="Enter tips title"
          footer="Enter tips footer"
          cardBodyTemplate={tipsForm}
        />
      </div>
    </div>
  );
};

export default EnterTips;
