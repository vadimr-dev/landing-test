import React, { useContext, useState }from 'react';
import styles from "./Infoblock.module.css";
import arrowLeft from "../../images/Arrow_left.svg";
import arrowRight from "../../images/Arrow_right.svg";
import { AppContext } from '../../context/Context'
import Button from "../Button/Button";


const MobilScreen = () => {
    const data = useContext(AppContext);
    const [index, setIndex] = useState(0); 
    let length = data.infoBlock.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex); 
    };
   
    const Block = () => {
        return (
                <article className={styles.Block}>
                    <h2>{data.infoBlock[index].mainText}</h2>
                    <p>{data.infoBlock[index].text}</p>
                    <Button text={data.infoBlock[index].textBTN} />
                </article>
            )
        }

    return (
        <div >
            <div className={styles.wrapperTitle}>
                <h2>01.</h2><h3>хто ми</h3>
            </div>
            <div className={styles.wrapperMenuButtons}>
                <button onClick={handlePrevious} className={styles.btnArrow}>
                <img src={arrowLeft} alt="arrow left" />
                </button>
                
                <nav className={styles.wrapperTitle}>
                    <h3>{data.infoBlock[index].title}</h3>
                </nav>
                <button onClick={handleNext}className={styles.btnArrow} >
                <img src={arrowRight} alt="arrow right" />
                </button>
            </div>

            <Block/>

        </div>
    )
}

export default MobilScreen;

