import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

const Context = (props) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimensions);
  const [animate, setAnimate] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  });

  const [isInfoBlockShow, setInfoBlockShow] = useState(false);
  const [isProjectsBlockShow, setProjectsBlockShow] = useState(false);
  const [isMainTitleShow, setMainTitleShow] = useState(true);
  const [showRings,setShowRings] = useState(false);
  const [infoBlock, setInfoBlock] = useState([
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
  ]);

  const showScreen1 = () => {
    setAnimate({ x: 0, y: 0, rotate: 0 });
    setInfoBlockShow(false);
    setMainTitleShow(true);
    setShowRings(false);
  };

  const showScreen2 = () => {
    setAnimate({
      x: -870,
      y: -650,
      rotate: 90,
    });
    setInfoBlockShow(true);
    setProjectsBlockShow(false);
    setMainTitleShow(false);
    setShowRings(false);
  };

  const showScreen3 = () => {
    setAnimate({ x: 1100, y: -650, rotate: 180 });
    setProjectsBlockShow(true);
    setInfoBlockShow(false);
    setShowRings(true);
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
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default Context;
