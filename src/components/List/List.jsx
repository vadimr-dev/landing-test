import React from "react";
import styles from "./List.module.css";

const List = ({ text }) => {
    
    return text.map((e, i) => {
      return (
        <li key={i} className={styles.listItem}>
          <span className={styles.circle}></span>
          <span className={styles.line}></span>
          <span className={styles.text}>{e}</span>
        </li>
      );
    });
  };

export default List;