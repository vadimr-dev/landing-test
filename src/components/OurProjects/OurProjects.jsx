import React, { useContext } from "react";
import styles from "./OurProjects.module.css";
import { AppContext } from "../../context/Context";
import List from "../List/List.jsx";
import Project from "../Project/Project";

const OurProjects = ({ ComponentRef }) => {
  const data = useContext(AppContext);
  const ProjectsText = [
    "Проєкт перший",
    "Проєкт другий",
    "Проєкт третій",
    "Проєкт четвертий",
  ];

  return (
    <>
      {data.isProjectsBlockShow && (
        <div ref={ComponentRef} className={styles.wrapper}>
          <div className={styles.wrapperTitle}>
            <h2>02.</h2>
            <h3>Проєкти</h3>
          </div>
          <article className={styles.Block}>
            <h2>Наші проєкти</h2>
            <ul>
              <List text={ProjectsText} />
            </ul>
          </article>
          {/* { <Project /> } */}
        </div>
      )}
    </>
  );
};

export default OurProjects;
