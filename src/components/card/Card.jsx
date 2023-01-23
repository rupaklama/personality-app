import PropTypes from "prop-types";
import Button from "../button/Button";

import styles from "./Card.module.css";

const Card = ({ question, handleUserInput }) => {
  return (
    <article className={styles.container}>
      <p className={styles.text}>{question.text}</p>
      <Button onClick={() => handleUserInput(question.text, "introvert")} label="Yes" />
      <Button onClick={() => handleUserInput(question.text, "extrovert")} label="No" />
    </article>
  );
};

Card.propTypes = {
  question: PropTypes.object,
  handleUserInput: PropTypes.func,
};

export default Card;
