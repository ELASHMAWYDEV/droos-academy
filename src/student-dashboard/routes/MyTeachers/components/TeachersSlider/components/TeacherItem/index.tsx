import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Assets
import TeacherImage from "assets/img/teacher-img.jpg";

const TeacherItem = () => {
  return (
    <div className={styles.teacherItem}>
      <div className={styles.imgContainer}>
        <img src={TeacherImage} alt="Teacher's Image" />
      </div>
      <span>الأستاذ / مصطفي فريد</span>
      <div className={styles.subject}>
        <h3>اللغة العربية</h3>
      </div>
      <p>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
      </p>
      <div className={styles.navButtons}>
          <Link to="/">محاضراتي</Link>
          <Link to="">فتح الموقع</Link>
      </div>
    </div>
  );
};

export default TeacherItem;
