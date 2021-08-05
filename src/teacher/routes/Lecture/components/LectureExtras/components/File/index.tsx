import React, { FC } from "react";
import { Link } from "react-router-dom";
import { GrDocumentDownload } from "react-icons/gr";

//Styles
import styles from "./index.module.scss";

//Assets

type props = {
  name: string;
};

const File: FC<props> = ({ name }) => {
  return (
    <div className={styles.fileContainer}>
      <Link to="">
        <div className={styles.downloadIconContainer}>
          <GrDocumentDownload />
        </div>
        <div>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default File;
