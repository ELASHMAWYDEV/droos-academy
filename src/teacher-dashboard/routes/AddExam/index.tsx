import React from "react";

//Styles
import styles from "./index.module.scss";

//Components

const AddExam = () => {
  return (
    <div className={styles.addExam}>
      <h2>اختبار جديد</h2>
      <div className={styles.container}>
        <div className={styles.examStatus}>
          <span>حالة الاختبار</span>
          <div>
            <select>
              <option selected disabled>
                حالة الاختبار
              </option>
              <option>مسودة</option>
            </select>
            <span></span>
          </div>
        </div>
        <div className={styles.examDetails}>
          <div>
            <label>عنوان الاختبار</label>
            <input type="text" placeholder="عنوان الاختبار" />
          </div>
          <div>
            <label>زمن الاختبار</label>
            <div>
              <div>
                <select>
                  <option>0 d</option>
                </select>
                <span></span>
              </div>
              <div>
                <select>
                  <option>1 h</option>
                </select>
                <span></span>
              </div>
              <div>
                <select>
                  <option>30 m</option>
                </select>
                <span></span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
