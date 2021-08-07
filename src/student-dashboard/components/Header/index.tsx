import React from "react";
import { NavLink } from "react-router-dom";

import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";

//Styles
import styles from "./index.module.scss";

//Assets
import Logo from "assets/img/logo.png";
import ProfilePic from "assets/img/profile-pic.jpg";
import { ReactComponent as Lectures } from "assets/img/lectures.svg";
import { ReactComponent as Teachers } from "assets/img/teachers.svg";
import { ReactComponent as GraducationCap } from "assets/img/graducation-cap.svg";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo" />
      <div className={styles.navsContainer}>
        <NavLink activeClassName={styles.active} to="/">
          <Lectures />
          محاضراتي
        </NavLink>
        <NavLink activeClassName={styles.active} to="/teachers">
          <Teachers />
          المعلمين
        </NavLink>
        <NavLink activeClassName={styles.active} to="/my-account">
          <GraducationCap />
          حسابي
        </NavLink>
      </div>
      <div className={styles.account}>
        <div className={styles.notifications}>
          <IoIosNotifications />
          <span>1</span>
        </div>
        <div className={styles.accountInfoContainer}>
          <img src={ProfilePic} alt="Profile Picture" />
          <span>مؤمن أيمن</span>
          <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
