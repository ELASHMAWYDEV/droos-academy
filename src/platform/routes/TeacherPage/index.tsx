import React from "react";

//Components
import { Header } from "platform/components";
import { Footer } from "./components";

//Styles
import styles from "./index.module.scss";

//Assets
import { ReactComponent as SvgImage } from "assets/img/teacher-landing-page-shape.svg";

const TeacherPage = () => {
  return (
    <div className={styles.teacherPageContainer}>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.svgImage}>
          <SvgImage />
        </div>
        <div className={styles.contentContainer}>
          <div>
            <p>
              لأنك تعلم الأجيال <br />
              نسعي لكي يمتد تأثيرك لأجيال قادمة
            </p>
            <p>
              نحن في <span>دروس اكاديمي </span> نوفر لك مميزات عديدة ، لن تجدها
              علي أي منصة أخري
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherPage;
