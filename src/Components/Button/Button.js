import classes from "./Button.module.css";

const Button = ({ children, type }) => {
  return (
    <button
      className={`${type === "primary" ? classes.primary : classes.secondary} ${
        classes.button
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
