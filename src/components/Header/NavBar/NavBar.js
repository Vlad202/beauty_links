import React from "react";

import MenuItem from "../MenuItem/MenuItem";
import LanguageBlock from "../LanguageBlock/LanguageBlock";

import useWindowSize from "../../../hooks/useWindowSize";

import widths from "../../../assets/scss/_widths.scss";
import styles from "./nav-bar.module.scss";

const menuItems = [
  { text: "Уход за волосами", url: "hair-care" },
  { text: "Уход за ногтями", url: "nail-care" },
  { text: "Косметолог", url: "cosmetology" },
  { text: "Макияж", url: "makeup" },
  { text: "Брови и ресницы", url: "eyebrows-and-eyelashes" },
  { text: "Уход за телом", url: "body-care" },
  { text: "Барберы", url: "barber" },
  { text: "Удаление волос", url: "hair-depilation" },
];

const NavBar = ({ open }) => {
  const [width] = useWindowSize();

  return (
    <div
      className={styles.navBar}
      style={
        open
          ? { transform: "translateX(-100%)" }
          : { transform: "translateX(0)" }
      }
    >
      <div className={styles.container}>
        <nav className={styles.navBarMenu}>
          {menuItems.map((item, key) => {
            return <MenuItem url={item.url} text={item.text} key={key} />;
          })}
        </nav>
      </div>
      {width < parseInt(widths.break_md) && <LanguageBlock />}
    </div>
  );
};

export default NavBar;
