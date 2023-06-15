import React, { useContext } from "react";
import styles from "./Section.module.css";
import Footer from "../Footer/Footer";
import { AppContext } from "../../context/Context";

const Section = ({ children, isLeftSection }) => {
  const data = useContext(AppContext);

  return (
    <section className={isLeftSection ? styles.leftSection : styles.section}>
      {children}
      {data.isFooterShow && <Footer />}
    </section>
  );
};

export default Section;
