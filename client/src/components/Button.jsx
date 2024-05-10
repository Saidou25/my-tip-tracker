// import { CiNoWaitingSign } from "react-icons/ci";
import "./Button.css";

const Button = ({ children, type, disabled, onClick, loading }) => {
  return (
    <div className="btn-div p-0">
      <button
        role="button"
        className="button btn"
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {loading ? (
          <>Please wait...</>
        ) : (
          <>
            <span className="show-save">{children}</span>
          </>
        )}
      </button>
    </div>
  );
};
export default Button;
