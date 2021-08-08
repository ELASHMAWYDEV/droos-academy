import React from "react";

//Styles
import styles from "./index.module.scss";

//Components
import { TeachersSliders } from "./components";

const MyTeachers = () => {
  return (
    <div className={styles.myTeachersContainer}>
      <TeachersSliders />
    </div>
  );
};

export default MyTeachers;
