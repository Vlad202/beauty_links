import React from "react";

import styles from "../TOU.module.scss";

const TermsOfUse = (props) => {
    return (
        <div className={styles.DockHeaderBlock}>
            <h2 className={styles.HeaderText}>{props.header}</h2>
            <p className={styles.Description}>{props.sub_header}</p>
        </div>
    );
};

export default TermsOfUse;