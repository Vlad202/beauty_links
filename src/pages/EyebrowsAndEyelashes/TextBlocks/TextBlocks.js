import React from "react";

import styles from "../EAE.module.scss";
import DataBlock from "../DataBlock/DataBlock";

const TextBlocks = (props) => {
  return (
    <div className={styles.container}>
        {
            props.not_header ? (
                ""
            ) : (
                <h2 className={styles.HeaderTextAnswers}>{"Ответы на частозадаваемые вопросы"}</h2>
            )
        }
        <div className={styles.Answersblocks}>
            {
                props.blocks.map((item, id) => {
                    return (
                        <DataBlock header={item.header} key={id} key_id={id} text={item.text} />
                    )
                })
            }
        </div>
    </div>
  );
};

export default TextBlocks;
