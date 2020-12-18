import React from 'react';
import styles from './menu-item.module.scss';
import { Link } from "react-router-dom";

const TopHeader = (props) => {
  return (
    <Link href="#" to={`/${props.url}`} className={styles.menuItem}>
      {props.text}
    </Link>
  );
};

export default TopHeader;
