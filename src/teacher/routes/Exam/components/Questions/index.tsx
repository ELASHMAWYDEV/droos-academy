import React, { FC, useState } from "react";

//Styles
import styles from "./index.module.scss";

//Components
import Question from "./components/Question";
import { Pagination } from "../";

const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      label: "السؤال الأول",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال الثاني",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال الثالث",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال الرابع",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال الخامس",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال السادس",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
    {
      label: "السؤال السابع",
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
        {
          name: "three",
          value: "three",
        },
        {
          name: "four",
          value: "four",
        },
      ],
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(3);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className={styles.questionsContainer}>
      <form>
        <Pagination
          questionsPerPage={questionsPerPage}
          totalQuestions={questions.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className={styles.container}>
          {currentQuestions.length !== 0 &&
            currentQuestions.map((question: any, index: number) => (
              <Question
                question={question.label}
                choices={question.choices}
                index={
                  currentPage == 1
                    ? index
                    : index + questionsPerPage * (currentPage - 1)
                }
              />
            ))}
        </div>
      </form>
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Questions;
