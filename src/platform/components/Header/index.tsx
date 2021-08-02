import { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styles from "./index.module.scss";

//Assets
import Logo from "assets/img/logo.png";

type HeaderProps = {
  backButtonEnabled?: boolean;
  navsEnabled?: boolean;
};

const Header: FC<HeaderProps> = ({ backButtonEnabled, navsEnabled }) => {
  const history = useHistory();

  return (
    <header
      className={styles.header}
      // style={{
      //   justifyContent: backButtonEnabled
      //     ? "space-between"
      //     : navsEnabled
      //     ? "space-between"
      //     : "flex-start",
      // }}
    >
      <img alt="دروس أكاديمي" src={Logo} />
      {backButtonEnabled && (
        <button className={styles.backButton} onClick={() => history.goBack()}>
          <p>العودة</p>
          <BiArrowBack />
        </button>
      )}
      {navsEnabled && (
        <div className={styles.navs}>
          <Link to="">المعلمين</Link>
          <Link to="">الموزعين</Link>
          <Link to="">المميزات</Link>
          <Link to="">عن الموقع</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
