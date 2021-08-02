import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.navButtons}>
        <h3>من أنت ؟</h3>
        <div className={styles.buttonsContainer}>
          <div>
            <Link to="/student">طالب</Link>
          </div>
          <div>
            <Link to="/teacher">معلم</Link>
          </div>
        </div>
      </div>
      <div className={styles.policyContainer}>
        <Link to="">شروط الاستخدام</Link>
        <Link to="">سياسة الخصوصية</Link>
      </div>
    </div>
  );
};

export default Footer;
