import React, { useContext, useEffect } from "react";
import styles from "./Header.module.css";
import styled from "styled-components";
import { AppContext } from "../../context/Context";

const Ul = styled.ul`
  @media (max-width: 600px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const Nav = ({ open }) => {
  const data = useContext(AppContext);
  const {
    scrollToView,
    infoBlockRef,
    isInfoBlockShow,
    setInfoBlockShow,
    projectsBlockRef,
    isProjectsBlockShow,
    setProjectsBlockShow,
    partnersBlockRef,
    isPartnersBlockShow,
    setPartnersBlockShow,
  } = data;

  useEffect(() => {
    if (!isInfoBlockShow) {
      setInfoBlockShow(true);
    } else if (!isProjectsBlockShow) {
      setProjectsBlockShow(true);
    } else if (!isPartnersBlockShow) {
      setPartnersBlockShow(true);
    }
  });

  const scrollToInfo = () => {
    scrollToView(infoBlockRef);
  };
  const scrollToProjects = () => {
    scrollToView(projectsBlockRef);
  };
  const scrollToPartners = () => {
    scrollToView(partnersBlockRef);
  };

  return (
    <Ul className={styles.menuItems} open={open}>
      <li className={styles.menuItem}>
        <p onClick={scrollToInfo}>ХТО МИ</p>
      </li>
      <li className={styles.menuItem}>
        <p onClick={scrollToProjects}>ПРОЄКТИ</p>
      </li>
      <li className={styles.menuItem}>
        <p onClick={scrollToPartners}>ПАРТНЕРАМ</p>
      </li>
      <li className={styles.menuItem}>
        <p onClick={scrollToPartners}>КОНТАКТИ</p>
      </li>
    </Ul>
  );
};

export default Nav;
