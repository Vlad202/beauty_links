import React, {useState} from "react";

import styles from "../EAE.module.scss";

const DataBlock = (props) => {
  let none_style = {"display": "none", "visibility": "hidden", "opacity": "0", "transition": "visibility 0s, opacity 0.5s linear;"};
  let block_style = {"display": "block", "visibility": "visible", "opacity": "1", "transition": "visibility 0s, opacity 0.5s linear;"};
  const [currentStyle, setCurrentStyle] = useState(none_style);
  const handleAnswers = () => {
    let key_element = document.querySelector(`#data-text-block-${props.key_id}`);
    console.log(key_element.style.display);
    if (key_element.style.display == "none") {
      setCurrentStyle(block_style);
    } else {
      setCurrentStyle(none_style);
    }
  }
  const headerHandler = () => {
    if (props.header) {
      return (
        <div onClick={handleAnswers} className={styles.DataBlockHeaderBlock}>
          <h2 className={styles.DataBlockHeader}>{props.header}</h2>
          <img className={styles.arrowBtnDown} src="/assets/img/down-arrow.svg" />
        </div>
      )
    }
    return <div></div>
  }
  if (props.header) {
    return (
      <div className={styles.DataBlock}>
          {headerHandler()}
          <div className={styles.DataBlockTextBlock} style={currentStyle} id={`data-text-block-${props.key_id}`}>
              <p className={styles.DataBlockText}>{props.text}</p>
          </div>
      </div>
    ) 
  }
  return (
    <div className={styles.DataBlock}>
        {headerHandler()}
        <div className={styles.DataBlockTextBlock} style={block_style} id={`data-text-block-${props.key_id}`}>
            <p className={styles.DataBlockText}>{props.text}</p>
        </div>
    </div>
  )
};

export default DataBlock;
