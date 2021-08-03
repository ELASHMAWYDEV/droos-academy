import React from "react";
import { Link } from "react-router-dom";
//Styles
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      Copyright © {new Date().getFullYear() + " "}
      <Link
        to={`${window.location.protocol}//${process.env.REACT_APP_PLATFORM_DOMAIN}:${window.location.port}`}
      >
        Droos Academy
      </Link>
    </div>
  );
};

export default Footer;
