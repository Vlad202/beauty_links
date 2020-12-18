import React from "react";

import BlockTitle from "./BlockTitle/BlockTitle";
import BeautyLinksColumn from "./BeautyLinksColumn/BeautyLinksColumn";
import CardsAndCopyrightColumn from "./CardsAndCopyrightColumn/CardsAndCopyrightColumn";
import useWindowSize from "../../hooks/useWindowSize";

import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import widths from "../../assets/scss/_widths.scss";

const Footer = () => {
  const [width] = useWindowSize();
  return (
    <footer className={styles.Footer}>
      {width > parseInt(widths.break_lg) ? (
        <div className={styles.container}>
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"О нас"} />
              <a href={"/"} className={styles.BlockLink}>
                Наша история
              </a>
              <Link to={"/how-it-works"} className={styles.BlockLink}>
                Как это работает
              </Link>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <BlockTitle text={"Клиенту/специалисту"} />
              <Link to="/user" className={styles.BlockLink}>
                Кабинет клиента
              </Link>
            </div>
          </div>
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"Услуги"} />
              <Link to={"/hair-care"} className={styles.BlockLink}>
                Уход за волосами
              </Link>
              <Link to={"/nail-care"} className={styles.BlockLink}>
                Уход за ногтями
              </Link>
              <Link to={"/cosmetology"} className={styles.BlockLink}>
                Косметолог
              </Link>
              <Link to={"/makeup"} className={styles.BlockLink}>
                Макияж
              </Link>
              <Link to={"/eyebrows-and-eyelashes"} className={styles.BlockLink}>
                Брови и ресницы
              </Link>
              <Link to={"/body-care"} className={styles.BlockLink}>
                Уход за телом
              </Link>
              <Link to={"/barber"} className={styles.BlockLink}>
                Барберы
              </Link>
              <Link to={"/hair-depilation"} className={styles.BlockLink}>
                Удаление волос
              </Link>
            </div>
          </div>
          <BeautyLinksColumn />
          <div className={styles.FooterColumn}>
            <div>
              <BlockTitle text={"Поддержка"} />
              <a href={"/contacts"} className={styles.BlockLink}>
                Обратная связь
              </a>
              <a href={"/"} className={styles.BlockLink}>
                Вопросы и ответы
              </a>
              <a href={"/terms-of-use"} className={styles.BlockLink}>
                Условия использования
              </a>
              <a href={"/privacy-policy"} className={styles.BlockLink}>
                Политика конфиденциальности
              </a>
              <a href={"/cookies-policy"} className={styles.BlockLink}>
                Cookies Policy
              </a>
            </div>
          </div>
          <CardsAndCopyrightColumn />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.mobileFooterLinks}>
            <BlockTitle text={"О нас"} />
            <Link to="/user" style={{ textDecoration: "none" }}>
              <BlockTitle text={"Клиенту/специалисту"} />
            </Link>
            <BlockTitle text={"Услуги"} />
            <BlockTitle text={"Поддержка"} />
          </div>
          <BeautyLinksColumn />

          <CardsAndCopyrightColumn />
        </div>
      )}
    </footer>
  );
};

export default Footer;
