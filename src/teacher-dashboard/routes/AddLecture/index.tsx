import React from "react";
import { FiUpload } from "react-icons/fi";

//Styles
import styles from "./index.module.scss";

//Components
import { File } from "./components";
const AddLecture = () => {
  return (
    <div className={styles.addLecture}>
      <h2>محاضرة جديدة</h2>
      <div className={styles.container}>
        <div className={styles.lectureStatus}>
          <span>حالة المحاضرة</span>
          <div>
            <select>
              <option selected disabled>
                حالة المحاضرة
              </option>
              <option>مسودة</option>
            </select>
            <span></span>
          </div>
        </div>
        <div className={styles.lectureDetails}>
          <div>
            <label>عنوان المحاضرة</label>
            <input type="text" placeholder="عنوان المحاضرة" />
          </div>
          <div>
            <label>تفاصيل المحاضرة</label>
            <input type="text" placeholder="تفاصيل المحاضرة" />
          </div>
          <div>
            <div>
              <label>الوقت المتوقع لانهاء المحاضرة</label>
              <div>
                <select>
                  <option selected disabled>
                    حالة المحاضرة
                  </option>
                  <option>مسودة</option>
                </select>
                <span></span>
              </div>
            </div>
            <div>
              <label>تكلفة المحاضرة بالجنيه المصري</label>
              <input type="text" placeholder="تكلفة المحاضرة بالجنيه المصري" />
            </div>
          </div>
        </div>
        <div className={styles.dashLine}></div>
        <div className={styles.filesContainer}>
          <h2>ملفات المحاضرة</h2>
          <div>
            <File name="ملف بلاغة" />
            <div className={styles.uploadFile}>
              <FiUpload />
              <div>ملف جديد</div>
            </div>
          </div>
        </div>
        <div className={styles.dashLine}></div>
      </div>
    </div>
  );
};

export default AddLecture;
