import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../context/Context";
import InfoBlock from "../InfoBlock/Infoblock";
import styles from "./Main.module.css";
import Section from "../Section/Section";
import OurProjects from "../OurProjects/OurProjects";
import Partners from "../Partners/Partners";
import MainTitle from "../MainTitle/MainTitle";

const Main = () => {
  const data = useContext(AppContext);
  const refElement = useRef(null);
  const {
    setMainBlockRef,
    setInfoBlockRef,
    setProjectsBlockRef,
    setPartnersBlockRef,
  } = data;
  const MainRef = useRef(null);
  const InfoRef = useRef(null);
  const ProjectsRef = useRef(null);
  const PartnersRef = useRef(null);
  const {
    currentScreen,
    setFooterShow,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4,
  } = data;

  useEffect(() => {
    const element = refElement.current;
    const handleScroll = () => {
      const scrollY = element.scrollTop;
      console.log(scrollY);
      if (scrollY === window.innerHeight) {
        showScreen2();
      }

      if (scrollY === window.innerHeight*2) {
        window.scrollTo(0, window.innerHeight*2);
        showScreen3();
      }
      if (scrollY === window.innerHeight*3) {
        showScreen4();
      }

      if (scrollY < 250) {
        showScreen1();
      }

      if (currentScreen === 4) {
        if (scrollY < window.innerHeight*3) {
          setFooterShow(false);
        } else {
          setFooterShow(true);
        }
      }
    };

    element.addEventListener("scroll", handleScroll);

    return () => element.removeEventListener("scroll", handleScroll);
  }, [
    currentScreen,
    setFooterShow,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4,
  ]);

  const screens = [
    {
      Component: MainTitle,
      isLeftSection: false,
      ComponentRef: MainRef,
    },
    {
      Component: InfoBlock,
      isLeftSection: false,
      ComponentRef: InfoRef,
    },
    {
      Component: OurProjects,
      isLeftSection: true,
      ComponentRef: ProjectsRef,
    },
    {
      Component: Partners,
      isLeftSection: true,
      ComponentRef: PartnersRef,
    },
  ];
  useEffect(() => {
    setMainBlockRef(MainRef);
    setInfoBlockRef(InfoRef);
    setProjectsBlockRef(ProjectsRef);
    setPartnersBlockRef(PartnersRef);
  }, [
    MainRef,
    setMainBlockRef,
    InfoRef,
    setInfoBlockRef,
    ProjectsRef,
    setProjectsBlockRef,
    PartnersRef,
    setPartnersBlockRef,
  ]);

  return (
    <main className={styles.main} ref={refElement}>
      {screens.map(({ Component, isLeftSection, ComponentRef }, index) => (
        <Section key={index} isLeftSection={isLeftSection}>
          <Component ComponentRef={ComponentRef} />
        </Section>
      ))}
    </main>
  );
};

export default Main;
