import React from "react";
import styles from "./Rings.module.css";
import planet1 from "../../images/smallring-planet-1.png";
import planet2 from "../../images/smallring-planet-2.png";

const SmallRing = () => {
  return (
    <div className={styles.smallRingWrapper}>
      <div className={styles.smallRing}>
        <img
          className={styles.smallRingFirstPlanet}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.smallRingFirstPlanetSmall}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.smallRingSecondPlanet}
          src={planet2}
          alt="project"
        />
        <img
          className={styles.smallRingSecondPlanetSmall}
          src={planet2}
          alt="project"
        />
      </div>
    </div>
  );
};

export default SmallRing;