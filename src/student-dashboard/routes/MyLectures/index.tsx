import React from "react";

//Styles
import styles from "./index.module.scss";

//Components
import { Header } from "student-dashboard/components";

const MyLectures = () => {
  return (
    <div className={styles.myLecturesContainer}>
      <Header />
    </div>
  );
};

export default MyLectures;
