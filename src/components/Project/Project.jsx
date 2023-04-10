import React, { useContext } from "react";
import styles from "./Project.module.css";
import Button from "../Button/Button";
import { AppContext } from "../../context/Context";

const Project = () => {
  const data = useContext(AppContext);

  return (
    <>
      {data.isProjectsBlockShow && ( // Тимчасово замість блоку Projects будемо відображати цей компонент.
        <div className={styles.projectWrapper}>
          <div className={styles.closeProject}></div>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            maxime! Corporis, iste possimus quos praesentium nam unde quod
            fugit, itaque totam aspernatur earum minus soluta magni saepe
            reiciendis placeat eum!
          </p>
          <Button text="дізнатися більше" />
        </div>
      )}
    </>
  );
};

export default Project;
