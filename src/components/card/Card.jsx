import PropTypes from "prop-types";
import Button from "../button/Button";

import styles from "./Card.module.css";

const Card = ({ question, handleUserInput }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{question.text}</p>
      <Button onClick={() => handleUserInput(question.text, "introvert")} label="Yes" />
      <Button onClick={() => handleUserInput(question.text, "extrovert")} label="No" />
    </div>
  );
};

Card.propTypes = {
  question: PropTypes.object,
  handleUserInput: PropTypes.func,
};

export default Card;
