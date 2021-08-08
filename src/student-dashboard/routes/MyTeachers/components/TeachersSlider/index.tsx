import React from "react";

//Styles
import styles from "./index.module.scss";

//Components
import { TeacherItem } from "./components";

const TeachersSlider = () => {
  return (
    <div className={styles.teachersSliderContainer}>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </div>
  );
};

export default TeachersSlider;
