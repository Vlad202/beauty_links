import React from "react";

import styles from "../HowItWorks.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.HeaderBlock1}>
                <img src={"/assets/img/header_hit/hit2.svg"} />
            </div>
            <div className={styles.HeaderBlock}>
                <img className={styles.Logo} src={"/assets/img/logo-01.png"} />
                <div className={styles.Description} dangerouslySetInnerHTML={{__html:"Узнайте как наш сервис может работать на вас"}} />
            </div>
            <div className={styles.HeaderBlock3}>
                <img src={"/assets/img/header_hit/hit1.svg"} />
            </div>
        </div>
    );
};

export default Header;