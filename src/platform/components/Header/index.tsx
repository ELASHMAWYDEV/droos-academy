import { FC } from "react";
import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styles from "./index.module.scss";

//Assets
import Logo from "assets/img/logo.png";

type HeaderProps = {
  backButtonEnabled?: boolean;
};

const Header: FC<HeaderProps> = ({ backButtonEnabled }) => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <img alt="دروس أكاديمي" src={Logo} />
      {backButtonEnabled && (
        <button className={styles.backButton} onClick={() => history.goBack()}>
          <p>العودة</p>
          <BiArrowBack />
        </button>
      )}
    </header>
  );
};

export default Header;
