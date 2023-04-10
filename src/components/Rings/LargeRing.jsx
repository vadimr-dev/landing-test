import React from "react";
import styles from "./Rings.module.css";
import planet1 from "../../images/largering-planet-1.png";

const LargeRing = () => {
  return (
    <div className={styles.largeRingWrapper}>
      <div className={styles.largeRing}>
        <img
          className={styles.largeRingFirstPlanet}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.largeRingFirstPlanetSmall}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.largeRingSecondPlanet}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.largeRingSecondPlanetSmall}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.largeRingThirdPlanet}
          src={planet1}
          alt="project"
        />
        <img
          className={styles.largeRingThirdPlanetSmall}
          src={planet1}
          alt="project"
        />
      </div>
    </div>
  );
};

export default LargeRing;
