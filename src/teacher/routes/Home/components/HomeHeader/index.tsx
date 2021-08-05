import React from "react";
import { Link } from "react-router-dom";
//Styles
import styles from "./index.module.scss";

//Assets
import Logo from "assets/img/logo.png";

//Components

const HomeHeader = () => {
  return (
    <header className={styles.homeHeaderContainer}>
      <img src={Logo} alt="Logo" />
      <div className={styles.navsContainer}>
        <Link to="/student/login">تسجيل الدخول</Link>
        <Link to="/student/sign-up">حساب جديد</Link>
      </div>
    </header>
  );
};

export default HomeHeader;
