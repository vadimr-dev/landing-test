import React, {useContext} from "react";
import styles from "./Footer.module.css";
import envelope from "../../images/envelope-fill.svg";
import telephone from "../../images/telephone-fill.png";
import discord from "../../images/discord.svg";
import {AppContext} from "../../context/Context";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.logo}><a href="#">Golden Community</a></div>
            <div className={styles.line}></div>
            <nav className={styles.blockMenu}>
                    <ul>
                        <li><a href="#">Хто ми</a></li>
                        <li><a href="#">Проєкти</a></li>
                        <li><a href="#">Партнерам</a></li>
                    </ul>
                    <div>2023 © Всі права захищено</div>
            </nav>
            <div className={styles.contactLinks}>
                <p><a href="mailto:e-mail@gmail.com"><img src={envelope} alt="envelope" />e-mail@gmail.com</a></p>
                <p><a href="tel:+380985555555"><img src={telephone} alt="telephone" />+380985555555</a></p>
                <p><a href="#"><img src={discord} alt="discord" />посилання на діскорт</a></p>
            </div>
            </div>
            
        </footer>
    );
};

export default Footer;