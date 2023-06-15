import React, { useContext, useEffect, useState } from "react";
import styles from "./BackgroundImage.module.css";
import Background from "../../images/main-planet.jpg";
import { motion } from "framer-motion";
import { AppContext } from "../../context/Context";

const BackgroundImage = () => {
  const data = useContext(AppContext);
  const {widthImage, windowDimensions, animate} = data;

  const [width, setWidth] = useState(widthImage(windowDimensions));

  useEffect(() => {
    setWidth(widthImage(windowDimensions))
  },[widthImage, windowDimensions])

  return (
    <div  className={styles.mainBackground}>
      <motion.img
        style={{ "width": width }} 
        transition={{ duration: 1.8, ease: "easeInOut" }}
        animate={animate}
        src={Background}
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;