import { dashboardData } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div className="container-roundup">
          <h1 className="name">Hello Sy</h1>
          <p className="paragraph">So far this week...</p>
        </div>
        <Card
          className="p-0 m-0 g-0"
          title="Dashboard title"
          footer="Dashboard footer"
          cardBodyTemplate={dashboardData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
