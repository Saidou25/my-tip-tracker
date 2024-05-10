import emptyAvatar from "../assets/profileicon.png";

import "./Card.css";

const CardBodyProfile = ({ fields = {}, src }) => {
  return (
    <div className="row you p-5 g-0">
      {fields &&
        fields?.map((field, index) => (
          <section key={index} className="here">
            <div className="col-12">
              <div className="container-fluid">
                <img
                  src={src ? src : emptyAvatar}
                  alt="Avatar"
                  className="avatar"
                />
              </div>
            </div>
            <p className="col-12">workPlace: {field.workPlace}</p>
            <p className="col-12">position: {field.position}</p>
            <p className="col-12">firstname: {field.firstname}</p>
          </section>
        ))}
    </div>
  );
};
export default CardBodyProfile;
