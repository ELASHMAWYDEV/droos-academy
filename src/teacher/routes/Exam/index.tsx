import React, { useState } from "react";

//Styles
import styles from "./index.module.scss";

//Assets
import TeacherImage from "assets/img/teacher-img.jpg";

//Components
import { Footer, LectureNavBar } from "teacher/components";
import { Questions } from "./components";

const Exam = () => {
  return (
    <div className={styles.examContainer}>
      <LectureNavBar />
      <div className={styles.container}>
        <div className={styles.examDetails}>
          <div className={styles.right}>
            <div>
              <h2>الاختبار الأول علي الدرس الثاني</h2>
              <div className={styles.info}>
                <div>
                  <h5>عدد الأسئلة</h5>
                  <span>5 مقالي</span>
                  <br />
                  <span>20 اختيار من متعدد</span>
                </div>
                <div>
                  <h5>عن الامتحان</h5>
                  <span>تاريخ النشر : 21/04/2021</span>
                  <br />

                  <span>المادة : اللغة العربية</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={TeacherImage} alt="TeacherImage" />
              </div>
              <div>الأستاذ / مصطفي فريد</div>
            </div>
          </div>
          <div className={styles.left}>
            <div>
              <h5>متبقي</h5>
              <span>1 ساعة</span>
              <span>12 دقيقة</span>
              <span>30 ثانية</span>
            </div>
            <div>
              <div>
                <h5>الأسئلة المتبقية</h5>
                <span>25</span>
              </div>
              <div>
                <h5>ما تم اجابته</h5>
                <span>13</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.questionsContainer}>
          <Questions />
        </div>
        <div className={styles.submitButton}>
          <button>نسليم الامتحان</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
