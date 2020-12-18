import React from "react";

import {useHistory} from "react-router-dom";
import styles from "../EAE.module.scss";
// import Button from "../../../components/Button/Button";


const ServiceSlide = (props) => {
  const history = useHistory();
  return (
    <div className={styles.ServiceSlide}>
        <div className={styles.ServiceSlideImageBlock}><img className={styles.CardImg} src={`/assets/img/cards_icons/${props.image}.svg`} /></div>
        <h1 className={styles.ServiceSlideHeader}>{props.header}</h1>
        <p className={styles.ServiceSlideText}>{props.text}</p>
        <div className={styles.CardBtn} onClick={() => history.push('/register')}>{"Посмотреть специалистов"}</div>
    </div>
  );
};

export default ServiceSlide;
