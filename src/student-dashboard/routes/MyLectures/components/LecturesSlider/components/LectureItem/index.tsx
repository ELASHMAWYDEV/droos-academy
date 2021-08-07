import React from "react";
import { Link } from "react-router-dom";
import { TiMediaPlayReverse } from "react-icons/ti";

//Styles
import styles from "./index.module.scss";

//Assets
import TeacherImage from "assets/img/teacher-img.jpg";
import CourseImage from "assets/img/course-img.png";
import { ReactComponent as PriceImage } from "assets/img/price.svg";
import { ReactComponent as TimerImage } from "assets/img/timer.svg";

const LectureItem = () => {
  return (
    <div className={styles.lectureItemContainer}>
      <div className={styles.header}>
        <img src={CourseImage} alt="Course image" />
        <div className={styles.teacherInfo}>
          <p>أ / مصطفي فريد</p>
          <div>
            <img src={TeacherImage} alt="teacher image" />
          </div>
        </div>
        <div className={styles.subject}>
          <span>اللغة العربية</span>
        </div>
        <div className={styles.date}>
          <span>22 Feb 2021</span>
        </div>
        <div className={styles.price}>
          <span>50 EGP </span>
          <PriceImage />
        </div>
        <div className={styles.hours}>
          <span>1.5 h</span>
          <TimerImage />
        </div>
      </div>
      <div className={styles.footer}>
        <h2>المحاضرة الثانية - الوحدة الأولي</h2>
        <div className={styles.dashLine}></div>
        <p> 22 Feb 2021 : تاريخ الشراء</p>
        <div className={styles.watchButton}>
          <Link to="">
            <span>
              <TiMediaPlayReverse />
            </span>
            مشاهدة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LectureItem;
