import React from "react";

import styles from "./BreadCrumbs.module.scss";
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
    return (
        <div className={styles.BreadCrumbsBlock}>
            <Link to={'/'}>Главная</Link>
            <span>/</span>
            <Link to={props.href}><strong>{props.steps}</strong></Link>
        </div>
    );
};

export default BreadCrumbs;