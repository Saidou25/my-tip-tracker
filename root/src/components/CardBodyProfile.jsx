import { auth } from "../firebase";
import "./Card.css";

const CardBodyProfile = ({ src }) => {
  const currentUser = auth.currentUser;
  

  return (
    <>
      <div className="col-12">
        <div className="container-fluid">
          <img
            src={src}
            alt="avatar"
            style={{
              widht: "200px",
              height: "200px",
              borderRadius: "50%",
              aspectRatio: "1 / 1",
              backgroundPosition: "cover",
            }}
          />
        </div>
      </div>
      <section className="here mt-5 mx-5">
        <p className="col-12">Display name: {currentUser?.displayName}</p>
        <p className="col-12">Contact: {currentUser?.email}</p>
        <p className="col-12">Created on: {currentUser?.metadata.creationTime}</p>
      </section>
    </>
  );
};
export default CardBodyProfile;
