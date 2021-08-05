import React from "react";

//Styles
import styles from "./index.module.scss";

//Assets
import teacherImage from "assets/img/teacher-img.jpg";
import { ReactComponent as PriceImage } from "assets/img/price.svg";
import { ReactComponent as TimerImage } from "assets/img/timer.svg";

const LectureDetails = () => {
  return (
    <div className={styles.lectureDetailsContainer}>
      <div className={styles.pinkBg}></div>
      <div className={styles.contentContainer}>
        <div>
          <h2> المحاضرة الثانية - الوحدة الأولي</h2>
          <div className={styles.lectureInfo}>
            <div>
              50 EGP
              <span>
                <PriceImage />
              </span>
            </div>
            <div>
              1.5 h
              <span>
                <TimerImage />
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
        </div>
      </div>
      <div className={styles.teacherDetails}>
        <div className={styles.imgContainer}>
          <img src={teacherImage} alt="teacherImage" />
        </div>
        <span>الأستاذ / مصطفي فريد</span>
      </div>
    </div>
  );
};

export default LectureDetails;
