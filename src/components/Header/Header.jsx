import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/Context";
import styles from "./Header.module.css";
import logoImage from "../../images/logo.svg";
import Button from "../Button/Button";
import Menu from "./Menu";

const Header = () => {
  const data = useContext(AppContext);
  const { scrollToView, mainBlockRef, isMainTitleShow, setMainTitleShow } =
    data;

  useEffect(() => {
    if (!isMainTitleShow) {
      setMainTitleShow(true);
    }
  });

  const scrollToMain = () => {
    scrollToView(mainBlockRef);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <figure className={styles.headerLogo}>
          <img
            onClick={scrollToMain}
            src={logoImage}
            alt="Golden community logo"
          />
        </figure>
        <nav className={styles.headerMenu}>
          <Menu />
        </nav>
        <Button text="доєднатися" />
      </div>
    </header>
  );
};

export default Header;
