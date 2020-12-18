import React from "react";

import {useHistory} from "react-router-dom";
import SecTitle from "../../../components/SecTitle/SecTitle";
import Button from "../../../components/Button/Button";
import styles from "./HowItWorks.module.scss";
import Step from "../Step/Step";

const HowItWorks = (props) => {
  const history = useHistory();
  const steps = props.HowItWorksFlag ? (
    [
      "Введите желаемые услуги и местоположение",
      "Выберите желаемую дату и место где Вы хотели бы получить услугу (Дом, офис, салон)",
      "Ознакомтесь со списком мастеров, которые соответствуют критериям вашего запроса",
      "Выберите и запишитесь к специалисту, оплатив онлайн",
    ]
  ) : (
    [
      "Введите Ваше гео и услугу, которая вам нужна.",
      "Выберете место, где Вам удобно встретиться с мастером: дома или в салоне поблизости.",
      "Просмотрите список мастеров, которые доступны в Вашем районе.",
      "Выберите и оплатите услугу с мастером, который подходит именно Вам!",
    ]
  );
  return (
    <div className={styles.container}>
      <h2 className={styles.HeaderText}>{"Как это работает?"}</h2>
      <div className={styles.Steps}>
        {steps.map((step, index) => {
          return <Step text={step} number={index + 1} key={index} />;
        })}
      </div>
      <Button text={"Начать"} onClick={() => history.push('/register')} />
    </div>
  );
};

export default HowItWorks;
