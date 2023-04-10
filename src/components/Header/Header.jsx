import React from "react";
import styles from "./Header.module.css";
import logoImage from "../../images/logo.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <figure className={styles.headerLogo}>
          <img src={logoImage} alt="Golden community logo" />
        </figure>
        <nav className={styles.headerMenu}>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem}>
              <a href="">ХТО МИ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">ПРОЄКТИ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">ПАРТНЕРАМ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">КОНТАКТИ</a>
            </li>
          </ul>
        </nav>
        <Button text="доєднатися" />
      </div>
    </header>
  );
};

export default Header;
