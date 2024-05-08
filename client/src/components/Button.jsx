import "./Button.css";

const Button = ({ children, type, disabled }) => {
  return (
    <div className="btn-div p-0">
      <button role="button" className="button btn" type={type} disabled={disabled}>
        {/* {children} */}
        {/* {children} */}
        button
      </button>
    </div>
  );
};
export default Button;
