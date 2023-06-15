import React, { useContext } from "react";
import styles from "./Partners.module.css";
import Button from "../Button/Button";
import List from "../List/List.jsx";
import { AppContext } from "../../context/Context";

const Partners = ({ ComponentRef }) => {
  const data = useContext(AppContext);
  const PartnersText = [
    "Ми знаємо що покращить ваш бізнес та як перенести його у світ web3.",
    "Досліджуємо та втілюємо стратегії масштабування бізнесу.",
    "Розробляємо на блокчейні використовуючи різні методи криптографії. ",
    "Натхненні сучасними та футуристичними дизайнами.",
    "Відкриті до нових партнерів та проектів.",
  ];

  return (
    <>
      {data.isPartnersBlockShow && (
        <div ref={ComponentRef} className={styles.wrapper}>
          <div className={styles.wrapperTitle}>
            <h2>03.</h2>
            <h3>Партнерам</h3>
          </div>

          <div className={styles.Block}>
            <h2>Пропоную познайомитись відразу як бізнес партнери.</h2>
            <ul className={styles.list}>
              <List text={PartnersText} />
            </ul>
            <Button text="СТАТИ ПАРТНЕРОМ" />
          </div>
        </div>
      )}
    </>
  );
};

export default Partners;
