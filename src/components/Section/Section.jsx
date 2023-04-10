import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, isLeftSection}) => (
  <section className={isLeftSection ? styles.leftSection : styles.section}>
    {children}
  </section>
);

export default Section;