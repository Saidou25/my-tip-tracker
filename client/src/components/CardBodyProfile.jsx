import { auth } from "../firebase";
import "./Card.css";

const CardBodyProfile = ({ src }) => {
  const currentUser = auth.currentUser;

  return (
    <div
    // className="row you p-5 g-0"
    >
      <div className="col-12">
        <div className="container-fluid">
          <img
            src={src}
            alt="avatar"
            style={{ widht: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
      </div>
      <section className="here">
        <p className="col-12">firstname: {currentUser?.displayName}</p>
        {/* <p className="col-12">contact: {user.email}</p> */}
      </section>
    </div>
  );
};
export default CardBodyProfile;
