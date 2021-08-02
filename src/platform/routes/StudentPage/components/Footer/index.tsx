import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <label>ادخل المنصة من هنا</label>
        <Link to="/student/login">تسجيل الدخول</Link>
      </div>
      <div>
        <label>سجل معنا الأن</label>
        <Link to="/student/sign-up">حساب جديد</Link>
      </div>
    </div>
  );
};

export default Footer;
