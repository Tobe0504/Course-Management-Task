import classes from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      className={`${type === "primary" ? classes.primary : classes.secondary} ${
        classes.button
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
