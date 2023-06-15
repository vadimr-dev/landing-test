import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import styles from "./MainTitle.module.css";

const MainTitle = ({ ComponentRef }) => {
  const data = useContext(AppContext);
  return (
    <>
      {data.isMainTitleShow && (
        <h1 ref={ComponentRef} className={styles.mainTitle}>
          GOLDEN COMMUNITY
        </h1>
      )}
    </>
  );
};

export default MainTitle;
