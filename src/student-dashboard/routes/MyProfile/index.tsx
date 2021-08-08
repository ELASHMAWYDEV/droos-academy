import React from "react";
import { MdModeEdit, MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

//Styles
import styles from "./index.module.scss";

//Assets
import ProfilePic from "assets/img/profile-pic.jpg";

const MyProfile = () => {
  return (
    <div className={styles.myProfile}>
      <h2>حسابي</h2>
      <div className={styles.container}>
        <div className={styles.balance}>
          <div>
            <div>
              الرصيد
              <div>
                120
                <span>L.E</span>
              </div>
            </div>
            <button>شحن رصيد</button>
          </div>
          <div>
            <div>
              النقاط
              <div>
                5400
                <span>XP</span>
              </div>
            </div>
            <button>استبدال نقاط</button>
          </div>
        </div>
        <div className={styles.dashLine}></div>
        <div className={styles.imgContainer}>
          <img src={ProfilePic} alt="your profile picture" />
          <span>
            <MdModeEdit />
          </span>
        </div>
        <h4>محمود العشماوي</h4>
        <div className={styles.infoContainer}>
          <div>
            <button>تعديل الحساب</button>
            <button>تغير كلمة المرور</button>
          </div>
          <div>
            <div>
              <span>momen.ayman3302@gmail.com</span>
              <MdEmail />
            </div>
            <div>
              <span>01111121162</span>
              <FaMobileAlt />
            </div>
          </div>
        </div>
        <div className={styles.dashLine}></div>
        <div className={styles.activity}>
          <div>
            <p>عدد المحاضرات التي تم شرائها</p>
            <span>30</span>
          </div>
          <div>
            <p>عدد المعلمين</p>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
