import React, { FC } from "react";

//Styles
import styles from "./index.module.scss";

//Assets
import { ReactComponent as Delete } from "../../../../../assets/img/remove.svg";

type props = {
  name: string;
};

const File: FC<props> = ({ name }) => {
  return (
    <div className={styles.fileContainer}>
      <Delete />
      <div>{name}</div>
    </div>
  );
};

export default File;
