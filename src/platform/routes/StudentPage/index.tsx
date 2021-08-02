import React from "react";

//Components
import { Header } from "platform/components";
import { Footer } from "./components";

//Styles
import styles from "./index.module.scss";

//Assets
import { ReactComponent as SvgImage } from "assets/img/student-landing-page-shape.svg";

const StudentPage = () => {
  return (
    <div className={styles.studentPageContainer}>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.svgImage}>
          <SvgImage />
        </div>
        <div className={styles.contentContainer}>
          <div>
            <p>
              نعلم أنك عانيت الكثير في الفترة السابقة <br />
              <span> دروس أكاديمي </span>هنا لمساعدتك في تخطي كل هذا
            </p>
            <p>
              أخبر معلمك أو معلمتك عنا واجعله ينضم الينا علي دروس أكاديمي لكي
              تتمكن من التمتع بكل المميزات التي ستقدمها إليك المنصة
            </p>
          </div>
          <div>
            <p>لأننا نسعي لكي يحصل طلابنا علي أفضل الفرص</p>
            <p>
              أنشأنا هذه المنصة لكي تكون حلقة الوصل بين الطلاب والمعلمين ، في
              بيئة تفاعلية وألوان مبهجة تضمن شعورك كطالب براحة نفسية بالغة لكي
              تركز علي دراستك ، لأن مستقبلك هو الأهم بالنسبة لنا
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPage;
