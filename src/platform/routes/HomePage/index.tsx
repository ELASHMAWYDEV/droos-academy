import React from "react";

//Components
import { Header } from "platform/components";
import { Footer } from "./components";

//Styles
import styles from "./index.module.scss";

//Assets
import { ReactComponent as SvgImage } from "assets/img/landing-page-shape.svg";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Header navsEnabled />
      <div className={styles.pageContainer}>
        <div className={styles.svgImage}>
          <SvgImage />
        </div>
        <div className={styles.contentContainer}>
          <p>
            العالم يَمُرُّ بظروف عصيبة
            <br />
            <span> لذلك فإن التعلم الالكتروني هو الحل </span>
            الافضل
          </p>
          <p>
            <span>دروس اكاديمي </span>ستقدم اليك الأفضل
          </p>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
