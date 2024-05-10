import { signupData } from "../data";
import Card from "../components/Card";

const Signup = () => {
  return (
    <div className="container-fluid g-0">
      <Card
        className="p-0 m-0 g-0"
        title="Signup title"
        footer="Signup footer"
        cardBodyTemplate={signupData}
      />
    </div>
  );
};

export default Signup;
