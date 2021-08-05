import React from "react";

//Styles
import styles from "./index.module.scss";

//Assets

//Components
import { LectureNavBar as Header } from "teacher/components";
import { LectureDetails } from "./components";

const Lecture = () => {
  return (
    <div className={styles.lectureContainer}>
      <Header />
      <LectureDetails />
      <div className={styles.dashedLine}></div>
    </div>
  );
};

export default Lecture;
