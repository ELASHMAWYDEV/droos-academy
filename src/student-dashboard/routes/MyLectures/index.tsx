import React from "react";

//Styles
import styles from "./index.module.scss";

//Components
import { Header, Footer } from "student-dashboard/components";
import { LecturesSlider } from "./components";

const MyLectures = () => {
  return (
    <div className={styles.myLecturesContainer}>
      <Header />
      <LecturesSlider />
      <Footer />
    </div>
  );
};

export default MyLectures;
