import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../context/Context";
import InfoBlock from "../InfoBlock/Infoblock";
import styles from "./Main.module.css";
import Section from "../Section/Section";
import Project from "../Project/Project";

const Main = () => {
  const data = useContext(AppContext);
  const refElement = useRef(null);
  useEffect(() => {
    const element = refElement.current;

    const handleScroll = () => {
      const scrollY = element.scrollTop;

      if (scrollY >= 250) {
        data.showScreen2();
      }

      if (scrollY > 1200) {
        data.showScreen3();
      }

      if (scrollY < 250) {
        data.showScreen1();
      }
    };

    element.addEventListener("scroll", handleScroll);

    return () => element.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.main} ref={refElement}>
      <Section>
        {data.isMainTitleShow && (
          <h1 className={styles.mainTitle}>GOLDEN COMMUNITY</h1>
        )}
      </Section>
      <Section>
        <InfoBlock />
      </Section>
      <Section isLeftSection={true}>
        <Project />
      </Section>
    </main>
  );
};

export default Main;
