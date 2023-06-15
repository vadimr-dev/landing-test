import React from "react";
import styles from "./Rings.module.css";
import planet1 from "../../images/smallring-planet-1.png";

const MiddleRing = () => {
  return (
    <div className={styles.middleRingWrapper}>
      <div className={styles.middleRing}>
        <div className={styles.orbitOfMiddleRingSecondPlanet}>
          <img
            className={styles.middleRingSecondPlanet}
            src={planet1}
            alt="project number"
          />
        </div>
        <div className={styles.orbitOfMiddleRingSecondPlanetSmall}>
          <img
            className={styles.middleRingSecondPlanetSmall}
            src={planet1}
            alt="decorative planet"
          />
        </div>
        <div className={styles.orbitOfMiddleRingFirstPlanetSmall}>
          <img
            className={styles.middleRingFirstPlanetSmall}
            src={planet1}
            alt="decorative planet"
          />
        </div>
        <div className={styles.orbitOfMiddleRingFirstPlanet}>
          <img
            className={styles.middleRingFirstPlanet}
            src={planet1}
            alt="project"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleRing;
