import React from "react";
import styles from "./Rings.module.css";
import planet1 from "../../images/largering-planet-1.png";

const LargeRing = () => {
  return (
    <div className={styles.largeRingWrapper}>
      <div className={styles.largeRing}>
        <div className={styles.orbitOfLargeRingFirstPlanetSmall}>
          <img
            className={styles.largeRingFirstPlanetSmall}
            src={planet1}
            alt="project"
          />
        </div>
        <div className={styles.orbitOfLargeRingFirstPlanet}>
          <img
            className={styles.largeRingFirstPlanet}
            src={planet1}
            alt="project"
          />
        </div>
        <div className={styles.orbitOfLargeRingSecondPlanet}>
          <img
            className={styles.largeRingSecondPlanet}
            src={planet1}
            alt="project"
          />
        </div>
        <div className={styles.orbitOfLargeRingSecondPlanetSmall}>
          <img
            className={styles.largeRingSecondPlanetSmall}
            src={planet1}
            alt="project"
          />
        </div>
        <div className={styles.orbitOfLargeRingThirdPlanet}>
          <img
            className={styles.largeRingThirdPlanet}
            src={planet1}
            alt="project"
          />
        </div>
        <div className={styles.orbitOfLargeRingThirdPlanetSmall}>
          <img
            className={styles.largeRingThirdPlanetSmall}
            src={planet1}
            alt="project"
          />
        </div>
      </div>
    </div>
  );
};

export default LargeRing;