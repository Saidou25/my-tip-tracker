import { tipsForm } from "../data";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

const EnterTips = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <p className="paragraph">This is your roundup</p>
        </div>
      <Card
        title="Enter tips title"
        footer="Enter tips footer"
        cardBodyTemplate={tipsForm}
      />
      </div>
    </>
  );
};

export default EnterTips;
