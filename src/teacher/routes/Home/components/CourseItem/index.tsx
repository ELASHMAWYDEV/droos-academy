import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Components

//Assets
import CourseImage from "assets/img/course-img.png";
import TeacherImage from "assets/img/teacher-img.jpg";
import { ReactComponent as PriceImage } from "assets/img/price.svg";
import { ReactComponent as TimerImage } from "assets/img/timer.svg";

const CourseItem = () => {
  return (
    <Link to="/lecture" className={styles.courseItemContainer}>
      <div className={styles.imgContainer}>
        <img src={CourseImage} alt="Course" />
      </div>
      <div className={styles.courseFooter}>
        <h1>المحاضرة الثانية - الوحدة الأولي</h1>
        <div className={styles.courseInfo}>
          <div>
            <div>
              <PriceImage />
            </div>
            <p>50 EGP </p>
          </div>
          <div className={styles.teacherInfo}>
            <div>
              <img src={TeacherImage} alt="" />
            </div>
            <p>أ / مصطفي فريد</p>
          </div>
          <div>
            <p>1.5 h</p>
            <TimerImage />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
