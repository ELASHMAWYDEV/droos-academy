import React, { useState } from "react";

//Styles
import styles from "./index.module.scss";

//Asssets

const Question = ({ question, choices, index }: any) => {
  const [choice, setChoise] = useState("");

  console.log(index);

  return (
    <div className={styles.questionContainer}>
      {question && (
        <label className={styles.questionLabel}>
          <div>{index + 1}</div>
          <span>{question}</span>
        </label>
      )}
      <div className={styles.choicesContainer}>
        {choices?.map((choice: any) => (
          <>
            <label className={styles.container}>
              <input
                type="radio"
                name={`${index}`}
                value={choice.value}
                onChange={(e) => setChoise(e.target.value)}
              />
              <div>{choice.name}</div>
              <span className={styles.checkMark}></span>
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default Question;
