import React from "react";

//Styles
import styles from "./index.module.scss";

//Assets

//Components
import { LectureNavBar as Header } from "teacher/components";
import { LectureDetails, LectureExtras, LectureParts } from "./components";

const Lecture = () => {
  return (
    <div className={styles.lectureContainer}>
      <Header />
      <LectureDetails />
      <div className={styles.dashedLine}></div>
      <LectureParts />
      <LectureExtras />
    </div>
  );
};

export default Lecture;
