import React, { useState, useEffect, useContext } from "react";
import styles from "./Infoblock.module.css";
import MobilScreen from "./Mobilscreen";
import FullScreen from "./Fullscreen";
import { AppContext } from "../../context/Context";

const InfoBlock = () => {
  const data = useContext(AppContext);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 870px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 870px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {data.isInfoBlockShow && (
        <div className={styles.wrapper}>
          {matches && <FullScreen />}
          {!matches && <MobilScreen />}
        </div>
      )}
    </>
  );
};

export default InfoBlock;
