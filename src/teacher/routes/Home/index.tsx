import React from "react";

//Styles
import styles from "./index.module.scss";

//Assets
import { ReactComponent as PhoneSvg } from "assets/img/phone-illustration.svg";
import teacherImg from "assets/img/teacher-img.jpg";

//Components
import { CoursesSlider, HomeHeader } from "./components";
import { Footer } from "teacher/components";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeHeader />
      <div className={styles.bg}></div>
      <div className={styles.introContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h4>معلم اللغة العربية</h4>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>
          </div>
          <div>
            <h4>معلم اللغة العربية</h4>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>
          </div>
        </div>
        <div className={styles.homeSvg}>
          <PhoneSvg />
        </div>
        <div className={styles.teacherInfo}>
          <div>
            <img src={teacherImg} alt="teacher's imga" />
          </div>
          <span>الأستاذ / مصطفي فريد</span>
        </div>
      </div>
      <div className={styles.dashedLine}></div>
      <CoursesSlider />
      <Footer />
    </div>
  );
};

export default Home;
