import React from "react";

// import {useHistory} from "react-router-dom";
import styles from "../EAE.module.scss";
import SecTitle from "../../../components/SecTitle/SecTitle";

const EAEHead = (props) => {
  // const history = useHistory();
  return (
    <div className={"container"}>
      <h2 className={styles.HeaderText}>{props.main_header}</h2>
      <div className={styles.EAEMain}>
        <div className={styles.EAEHeadBlock}>
          <img
            src="/assets/img/brush-gold.png"
            className={styles.EAEHeadImage}
            alt="background"
          />
        </div>
        <div className={styles.Description} dangerouslySetInnerHTML={{__html:props.head_text}} />
      </div>
    </div>
  );
};

export default EAEHead;