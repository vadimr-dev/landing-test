import React, { useContext, useState } from "react";
import styles from "./Infoblock.module.css";

import { AppContext } from '../../context/Context'
import Button from "../Button/Button";

const FullScreen = () => {
  
  const data = useContext(AppContext);
  const [currentBlock, setCurrentBlock] = useState(data.infoBlock[0]);
  const [active, setActive] = useState(0);
  const clickChange = (e,i) => {
    setCurrentBlock(e);
    setActive(i);
  }

 
  const Block = () => {
        return (
             <article className={styles.Block}>
                <h2>{currentBlock.mainText}</h2>
                <p>{currentBlock.text}</p>
                <Button text={currentBlock.textBTN} />
        </article>
         )
     }
  const NavButtons = () => {
        return (
          data.infoBlock.map((e, i = 0) => (<li key={i + 1} className={styles.menuItem}><a className={active == i ? `${styles.active}` : ''} onClick={() => clickChange(e,i)}>
               {e.title}
              </a></li>)) 
        )
    }
  return (
    <div>
      <div className={styles.wrapperTitle}>
        <h2>01.</h2>
        <h3>хто ми</h3>
      </div>
          <div className={styles.info}>
            <nav className={styles.infoMenu}>
              <ul className={styles.menuItems}>
              <NavButtons />
              </ul>
            </nav>
        <Block />
      </div>
    </div>
  );
};
export default FullScreen;