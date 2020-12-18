import React, {useState} from "react";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";

import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <main>
            <BreadCrumbs href={"/contacts"} steps={"Контакты"} />
            <div className={styles.LogoHeader}>
                <img className={styles.Logo} src={"/assets/img/logo-01.png"} />
            </div>
            <div className={styles.container}>
                <div className={styles.EAEMain}>
                    <div className={styles.EAEHeadBlock}>
                        <img
                        src="/assets/img/brush-gold.png"
                        className={styles.EAEHeadImage}
                        alt="background"
                        />
                    </div>
                    <div className={styles.Description}>{"Команда разработчиков будет рада услышать ваши пожелания, а также оперативно отреагирует на уточнения и неисправности"}</div>
                </div>
            </div>
            <div className={styles.container_center}>
                <h1 className={styles.HeaderText}>{"Контакты для связи"}</h1>
            </div>
            <div className={styles.form_container}>
                <div className={styles.formBlock}>
                    <form>
                        <div className={styles.input}>
                            <input placeholder="Имя" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder="e-mail" />
                        </div>
                        <div className={styles.input}>
                            <input placeholder="Тема письма" />
                        </div>
                        <div className={styles.input}>
                            <div className={styles.selectdiv}>
                                <label>
                                    <select name="contact_options" id="id_contact_options">
                                        <option value="1">По вопросу</option>
                                        <option value="2">Cell Phone</option>
                                        <option value="3">Work Phone</option>
                                        <option value="4">My Email</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className={styles.input}>
                            <textarea placeholder="Тема письма" />
                        </div>
                        <button className={styles.submitBtn} type="submit">Отправить</button>
                    </form>
                </div>
                <div className={styles.contactsFormBlock}>
                        <div className={styles.contactRow}><p className={styles.contactText}>Поддержка:</p><p className={styles.contactMail}>support@beautilinks.com</p></div>
                        <div className={styles.contactRow}><p className={styles.contactText}>Сотрудничество:</p><p className={styles.contactMail}>sales@beautilinks.com</p></div>
                        <div className={styles.contactRow}><p className={styles.contactText}>Поддержка:</p>
                            <div className={styles.ContactImages}>
                                <img src="/assets/img/contacts/fb.svg" />
                                <img src="/assets/img/contacts/insta.svg" />
                            </div>
                        </div>
                </div>
            </div>
        </main>
    );
};

export default Contacts;