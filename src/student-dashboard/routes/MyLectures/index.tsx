import React from "react";

//Styles
import styles from "./index.module.scss";

//Components
import { Footer } from "student-dashboard/components";
import { LecturesSlider } from "./components";

const MyLectures = () => {
  return (
    <div className={styles.myLecturesContainer}>
      <LecturesSlider />
    </div>
  );
};

export default MyLectures;
