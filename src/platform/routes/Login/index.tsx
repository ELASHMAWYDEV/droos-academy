import { useMemo, useState } from "react";
import styles from "./index.module.scss";
import { useParams, useHistory } from "react-router-dom";

//Components
import { Header } from "platform/components";

//Assets
import { ReactComponent as SvgImage } from "assets/img/auth-screens-shape.svg";

type Params = {
  type: "student" | "teacher";
};

const Login = () => {
  const { type } = useParams<Params>();
  const history = useHistory();

  const [userData, setUserData] = useState({
    phone: "",
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
    <div className={styles.loginContainer}>
      <Header backButtonEnabled />
      <div className={styles.pageContainer}>
        <div className={styles.svgImage}>
          <SvgImage />
        </div>
        <div className={styles.loginBox}>
          <h3>تسجيل الدخول كــ{typeText}</h3>
          <form
            className={styles.formContainer}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label>رقم الهاتف / البريد الالكتروني</label>
              <input
                placeholder="رقم الهاتف / البريد الالكتروني"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
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

export default Login;
