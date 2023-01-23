import { useState } from "react";
import Button from "../components/button/Button";
import Card from "../components/card/Card";

import styles from "./PersonalityPage.module.css";

import questions from "../mock";

const PersonalityPage = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const [result, setResult] = useState("");

  const handleUserInput = (question, answer) => {
    setUserAnswer([...userAnswer, { question, answer }]);
  };

  const calculateScore = () => {
    let introvertScore = 0;
    let extrovertScore = 0;

    userAnswer.forEach(({ answer }) => {
      if (answer === "introvert") {
        introvertScore++;
      } else {
        extrovertScore++;
      }
    });

    if (introvertScore === extrovertScore) {
      setResult("🤔... Answer one more question");
    }

    if (introvertScore > extrovertScore) {
      setResult("Introvert");
    }

    if (extrovertScore > introvertScore) {
      setResult("Extrovert");
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>Are you an introvert or an extrovert?</h2>
      {result && (
        <p className={styles.text}>
          You are <strong>{result}</strong>!
        </p>
      )}

      <section className={styles.section}>
        {questions.map((question, index) => (
          <Card key={`card` + index} question={question} handleUserInput={handleUserInput} />
        ))}
      </section>

      <Button onClick={calculateScore} label="See Results" style={{ backgroundColor: "black", marginTop: "1rem" }} />
    </div>
  );
};

export default PersonalityPage;
