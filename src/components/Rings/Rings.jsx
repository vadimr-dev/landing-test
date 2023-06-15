import React, { useContext } from "react";
import styles from "./Rings.module.css";
import SmallRing from "./SmallRing";
import MiddleRing from "./MiddleRing";
import LargeRing from "./LargeRing";
import { AppContext } from "../../context/Context";
import { motion } from "framer-motion";

const Rings = () => {
  const data = useContext(AppContext);

  return (
    <>
      {data.showRings && (
        <motion.div
          className={styles.ringsWrapper}
          // style={{ width: width }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          animate={data.ringsAnimate}
        >
          <SmallRing />
          <MiddleRing />
          <LargeRing />
        </motion.div>
      )}
    </>
  );
};

export default Rings;
