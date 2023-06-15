import React, { useState, useEffect, createContext, useCallback } from "react";

export const AppContext = createContext();

const Context = (props) => {
  const [isInfoBlockShow, setInfoBlockShow] = useState(false);
  const [isProjectsBlockShow, setProjectsBlockShow] = useState(false);
  const [isMainTitleShow, setMainTitleShow] = useState(true);
  const [showRings, setShowRings] = useState(false);
  const [isPartnersBlockShow, setPartnersBlockShow] = useState(false);
  const [mainComponent, setMainComponent] = useState(null);
  const [currentScrollY, setCurrentScrollY] = useState(null);
  const [isFooterShow, setFooterShow] = useState(null);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [currentScreen, setCurrentScreen] = useState(1);

  const positionAnimateY = (windowDimensions) => {
    if (windowDimensions.width > 900) {
      return 0;
    } else if (windowDimensions.width > 800) {
      return -60;
    } else if (windowDimensions.width > 700) {
      return -100;
    } else if (windowDimensions.width > 500) {
      return -100;
    } else if (windowDimensions.width > 420) {
      return -300;
    } else if (windowDimensions.width > 300) {
      return -320;
    }
    return -190;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [animate, setAnimate] = useState({
    x: 0,
    y: positionAnimateY(windowDimensions),
    rotate: 0,
  });
  const [ringsAnimate, setRingsAnimate] = useState({
    x: 0,
    // y: positionAnimateY(windowDimensions),
    y: 0,
    rotate: 0,
  });

  const widthImage = (windowDimensions) => {
    if (windowDimensions.width >= 1440) {
      return 1944;
    }
    return windowDimensions.width * 2;
  };

  const positionAnimateX = useCallback(
    (windowDimensions) => {
      if (windowDimensions.width <= 430) {
        return currentScreen === 2
          ? -(windowDimensions.width - 60)
          : windowDimensions.width + 40;
      }
      if (windowDimensions.width <= 870) {
        return currentScreen === 2
          ? -(windowDimensions.width - 60)
          : windowDimensions.width - 50;
      }
      if (windowDimensions.width <= 1070) {
        return currentScreen === 2
          ? -(windowDimensions.width - 200)
          : windowDimensions.width - 150;
      }
      if (windowDimensions.width < 1280) {
        return currentScreen === 2
          ? -(windowDimensions.width - 300)
          : windowDimensions.width - 200;
      }
      if (windowDimensions.width < 1350) {
        return currentScreen === 2
          ? -(windowDimensions.width - 350)
          : windowDimensions.width - 250;
      }
      if (windowDimensions.width < 1440) {
        return currentScreen === 2
          ? -(windowDimensions.width - 500)
          : windowDimensions.width - 300;
      }
      return currentScreen === 2 ? -870 : 1100;
    },
    [currentScreen]
  );

  useEffect(() => {
    if (currentScreen === 1) {
      setAnimate({
        x: 0,
        y: positionAnimateY(windowDimensions),
      });
    }
    if (currentScreen === 2) {
      setAnimate({
        x: positionAnimateX(windowDimensions),
        y: -650,
        rotate: 90,
      });
    }
    if (currentScreen === 3) {
      setAnimate({
        x: positionAnimateX(windowDimensions),
        y: -650,
        rotate: 180,
      });
    }
    if (currentScreen === 4) {
      setFooterShow(true);
      setAnimate({
        x: positionAnimateX(windowDimensions),
        y: -1000,
        rotate: 180,
      });
    }
  }, [windowDimensions, currentScreen, positionAnimateX]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const infoBlock = [
    {
      id: 1,
      title: "ПРО WEB3",
      mainText:
        "Ми – ком’юніті, яке покаже тобі, що таке WEB3 та як воно працює",
      text: "Пояснимо, чому всі говорять що за криптографією майбутнє та як мати крипто-гроші. Ми архітектори та будівельники, які будують в новій світовій мережі, в новому інтернеті - WEB3. Ми команда, різних людей але єдиною метою, зробити світ зручнішим для використання.",
      textBTN: "СТАТИ ЧАСТИНОЮ КОМАНДИ",
    },
    {
      id: 2,
      title: "КОМАНДА",
      mainText: "Стань частиною команди",
      text: (
        <>
          Хочеш стати частиною команди? Поспілкуватись з розробниками, розпитати
          дизайнерів, чи дізнатись що таке таргетинг?
          <br />
          <br />
          Долучайся до нашого діскорду, ти опинишся в нашій команді, де зможеш
          отримати перший досвід у web3 та роботі з командою. Дізнаєшся як
          працює ІТ сфера та отримаєш досвід.
        </>
      ),
      textBTN: "ПРИЄДНАТИСЯ",
    },
    {
      id: 3,
      title: "НОВИНИ",
      mainText: "Приймай активну участь",
      text: (
        <>
          А можливо тобі стане цікаво як працює web3? Хочеш знати новини про
          наші нові проекти раз на місяць та вносити пропозиції?
          <br />
          <br />
          <br />
          <br />
          Реєструйся на сайті:
        </>
      ),
      textBTN: "ЗАРЕЄСТРУВАТИСЯ",
    },
  ];

  const showScreen1 = () => {
    setCurrentScreen(1);
    setInfoBlockShow(false);
    setMainTitleShow(true);
    setShowRings(false);
  };

  const showScreen2 = () => {
    setCurrentScreen(2);
    setInfoBlockShow(true);
    setProjectsBlockShow(false);
    setMainTitleShow(false);
    setShowRings(false);
  };

  const showScreen3 = () => {
    setPartnersBlockShow(false);
    setCurrentScreen(3);
    setProjectsBlockShow(true);
    setInfoBlockShow(false);
    setShowRings(true);
    setRingsAnimate({
      x: 0,
      // y: positionAnimateY(windowDimensions),
      y: "-50%",
      rotate: 359,
    });
  };
  const showScreen4 = () => {
    setCurrentScreen(4);
    setProjectsBlockShow(false);
    setInfoBlockShow(false);
    setPartnersBlockShow(true);
    setRingsAnimate({
      x: 0,
      // y: positionAnimateY(windowDimensions),
      y: "-75%",
      rotate: 340,
    });
  };
  const [mainBlockRef, setMainBlockRef] = useState(null);
  const [infoBlockRef, setInfoBlockRef] = useState(null);
  const [projectsBlockRef, setProjectsBlockRef] = useState(null);
  const [partnersBlockRef, setPartnersBlockRef] = useState(null);

  const scrollToView = (el) => {
    el.current.scrollIntoView();
  };
  const value = {
    animate,
    setAnimate,
    isInfoBlockShow,
    setInfoBlockShow,
    infoBlock,
    isProjectsBlockShow,
    setProjectsBlockShow,
    isMainTitleShow,
    setMainTitleShow,
    showRings,
    showScreen1,
    showScreen2,
    showScreen3,
    windowDimensions,
    widthImage,
    mainComponent,
    setMainComponent,
    currentScrollY,
    setCurrentScrollY,
    showScreen4,
    setPartnersBlockShow,
    isPartnersBlockShow,
    ringsAnimate,
    setRingsAnimate,
    isFooterShow,
    setFooterShow,
    currentScreen,
    mainBlockRef,
    setMainBlockRef,
    infoBlockRef,
    setInfoBlockRef,
    projectsBlockRef,
    setProjectsBlockRef,
    partnersBlockRef,
    setPartnersBlockRef,
    scrollToView,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default Context;
