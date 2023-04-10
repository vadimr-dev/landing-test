import React, { useContext } from "react";
import styles from "./Rings.module.css";
import SmallRing from "./SmallRing";
import MiddleRing from "./MiddleRing";
import LargeRing from "./LargeRing";
import { AppContext } from "../../context/Context";


const Rings = () => {

  const data = useContext(AppContext);
  
  return (
    <>
      {data.showRings && (
        <div className={styles.ringsWrapper}>
          <SmallRing />
          <MiddleRing />
          <LargeRing />
        </div>
      )}
    </>
  );
};

export default Rings;
