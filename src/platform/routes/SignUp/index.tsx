import { useMemo, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Components
import { Header } from "platform/components";

//Assets
import { ReactComponent as SvgImage } from "assets/img/auth-screens-shape.svg";

type Params = {
  type: "student" | "teacher";
};

const SignUp = () => {
  const { type } = useParams<Params>();
  const history = useHistory();

  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    year: "",
    password: "",
  });

  const typeText = useMemo(() => {
    switch (type) {
      case "student":
        return "طالب";
      case "teacher":
        return "معلم";
      default:
        history.push("/404");
    }
  }, [type]);

  return (
    <div className={styles.signUpContainer}>
      <Header backButtonEnabled />
      <div className={styles.pageContainer}>
        <div className={styles.svgImage}>
          <SvgImage />
        </div>
        <div className={styles.signUpBox}>
          <h3>تسجيل حساب جديد كــ{typeText}</h3>
          <form
            className={styles.formContainer}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label>الاسم بالكامل</label>
              <input
                placeholder="الاسم بالكامل"
                type="text"
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label>رقم الهاتف</label>
              <input
                placeholder="رقم الهاتف"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label>البريد الالكتروني</label>
              <input
                placeholder="البريد الالكتروني"
                type="text"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className={styles.selectContainer}>
              <label htmlFor="selectedYear">السنة الدراسية</label>
              <select
                onChange={(e) =>
                  setUserData({ ...userData, year: e.target.value })
                }
              >
                <option
                  value=""
                  disabled
                  selected
                  unselectable="on"
                  id="selectedYear"
                >
                  اختر السنة الدراسية
                </option>
                <option value={1}>1</option>
              </select>
              <span></span>
            </div>
            <div>
              <label>كلمة المرور</label>
              <input
                placeholder="كلمة المرور"
                type="text"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <div>
              <label>تأكيد كلمة المرور</label>
              <input placeholder="تأكيد كلمة المرور" type="text" />
            </div>
            <div className={styles.submitBtn}>
              <button type="submit">تسجيل الدخول</button>
            </div>
          </form>
          <h4>ليس لديك حساب ؟</h4>
          <button className={styles.goRegisterBtn}>تسجيل حساب جديد</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
