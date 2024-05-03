import { weekly } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "./dashboard.css";

const Dashboard = () => {

  return (
    <>
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <p className="paragraph">This is your roundup</p>
        </div>
        <Card className="p-0 m-0 g-0"
        title="Dashboard title"
        footer="Dashboard footer"
        cardBodyTemplate={weekly}
      />
      </div>
    </>
  );
};

export default Dashboard;
