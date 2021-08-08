import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

//Styles
import styles from "./index.module.scss";

//components
import { LectureItem } from "./components";

const LecturesSlider = () => {
  return (
    <div className={styles.lecturesSliderContainer}>
      <div className={styles.lecturesGrid}>
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
      </div>
    </div>
  );
};

export default LecturesSlider;
