import React from "react";

import styles from "../TOU.module.scss";

const Document = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.DocBlock} dangerouslySetInnerHTML={{__html:props.text}} />
        </div>
    );
};

export default Document;