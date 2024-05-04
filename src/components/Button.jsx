import "./Button.css";

const Button = ({ children, type }) => {
  return (
    <div className="btn-div p-0">
      <button className="button btn p-0" type={type}>
        {children}
      </button>
    </div>
  );
};
export default Button;
