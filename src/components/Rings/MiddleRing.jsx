import React from "react";
import styles from "./Rings.module.css";
import planet1 from "../../images/smallring-planet-1.png";

const MiddleRing = () => {
  return (
    <div className={styles.middleRingWrapper}>
      <div className={styles.middleRing}>
        <img
          className={styles.middleRingFirstPlanet}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.middleRingFirstPlanetSmall}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.middleRingSecondPlanetSmall}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.middleRingSecondPlanet}
          src={planet1}
          alt="project"
        />
      </div>
    </div>
  );
};

export default MiddleRing;
