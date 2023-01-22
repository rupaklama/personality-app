import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ label, onClick, style }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button} style={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
