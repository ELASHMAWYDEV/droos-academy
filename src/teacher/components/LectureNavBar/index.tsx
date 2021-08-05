import React from "react";

//Styles
import styles from "./index.module.scss";

//Assets
import Logo from "assets/img/logo.png";
import { Link } from "react-router-dom";

const LectureNavBar = () => {
  return (
    <header className={styles.lectureNavBarContainer}>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.navsContainer}>
        <Link to="">محاضراتي</Link>
        <Link to="">حسابي</Link>
      </div>
      <div className={styles.balanceContainer}>
        <div>
          120
          <span>L.E</span>
        </div>
        <div>
          5400
          <span>XP</span>
        </div>
      </div>
    </header>
  );
};

export default LectureNavBar;
