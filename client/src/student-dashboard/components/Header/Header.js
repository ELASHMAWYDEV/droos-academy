import React, { useState } from "react";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import ProfilePic from "../../../assets/img/profile-pic.jpg";
import { ReactComponent as Lectures } from "../../../assets/img/lectures.svg";
import { ReactComponent as Teachers } from "../../../assets/img/teachers.svg";
import { ReactComponent as GraducationCap } from "../../../assets/img/graducation-cap.svg";

const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  // const [visible, setVisible] = useState(false);
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="navs-container">
        <div>
          <NavLink exact activeClassName="active" to="/">
            <Lectures />
            محاضراتي
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/teachers">
            <Teachers />
            المعلمين
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/my-account">
            <GraducationCap />
            حسابي
          </NavLink>
        </div>
      </div>
      <div className="info-container ">
        <div className="notifications-icon">
          <IoIosNotifications />
          <span>0</span>
        </div>
        <div
          className="account-info  "
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <div className="account-img ">
            <img src={ProfilePic} alt="profile picture" />
          </div>
          <div className="account-name ">محمود العشماوي</div>
          <div className="arrow-icon ">
            <IoIosArrowDown />
          </div>
        </div>
      </div>{" "}
      <div
        className="menu"
        style={{ display: sidebarActive ? "block" : "none" }}
      >
        <div class="triangle-up"></div>
        <div onClick={() => setSidebarActive(!sidebarActive)}>
          <NavLink exact className="res" activeClassName="active" to="/">
            <Lectures />
            محاضراتي
          </NavLink>
        </div>
        <div onClick={() => setSidebarActive(!sidebarActive)}>
          <NavLink className="res" activeClassName="active" to="/teachers">
            <Teachers />
            المعلمين
          </NavLink>
        </div>
        <div onClick={() => setSidebarActive(!sidebarActive)}>
          <NavLink className="res" activeClassName="active" to="/my-account">
            <GraducationCap />
            حسابي
          </NavLink>
        </div>
        <div
          className="delete-btn"
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <Link>تسجيل الخروج</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
