import React from "react";
import { Link, NavLink } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Assets

const LectureParts = () => {
  return (
    <div className={styles.lecturePartsContainer}>
      <h2>دروس المحاضرة</h2>
      <div className={styles.container}>
        <div className={styles.partsContainer}>
          <NavLink exact to="/lecture/" activeClassName={styles.activeButton}>
            الجزء الاول
          </NavLink>
          <NavLink to="/lecture/2" activeClassName={styles.activeButton}>
            الجزء الثاني
          </NavLink>
          <NavLink to="/lecture/3" activeClassName={styles.activeButton}>
            الجزء الثالث
          </NavLink>
          <NavLink to="/lecture/4" activeClassName={styles.activeButton}>
            الجزء الرابع
          </NavLink>
          <Link to="" className={styles.examButton}>
            اختبار الجزء الاول
          </Link>
          <Link to="" className={styles.examButton}>
            اختبار الجزء الثاني
          </Link>
        </div>
        <div className={styles.videoContainer}></div>
      </div>
    </div>
  );
};

export default LectureParts;
