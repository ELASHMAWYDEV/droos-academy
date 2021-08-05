import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Assets

//Components
import { File } from "./components";

const LectureExtras = () => {
  const { path } = useRouteMatch();
  return (
    <div className={styles.lectureExtrasContainer}>
      <div className={styles.navs}>
        <NavLink activeClassName={styles.active} to={`${path}`}>
          ملاحظات المعلم
        </NavLink>
        <NavLink activeClassName={styles.active} to={`${path}/lecture-files`}>
          ملفات المحاضرة
        </NavLink>
      </div>
      <div className={styles.content}>
        <Route path={`${path}/`}>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
        </Route>
        <Route exact path={`${path}/lecture-files`}>
          <div className={styles.filesContainer}>
            <File name="ملف النحو" />
            <File name="ملف البلاغة" />
          </div>
        </Route>
      </div>
    </div>
  );
};

export default LectureExtras;
