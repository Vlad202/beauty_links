import React, {useState} from "react";

import {useHistory} from "react-router-dom";
import styles from "../EAE.module.scss";
import ServiceSlide from "../ServiceSlide/ServiceSlide";

const OurServices = (props) => {
  const history = useHistory();
  const [current_slide, setSlide] = useState(1);
  const [totalTranslation, setTranslate] = useState(560);
  const [prevCheckbox, setPrevCheckbox] = useState(0);
  const slides_length = props.slides.length;

  const prevSlide = (e) => {
    let slides = document.querySelectorAll(".EAE_ServiceSlide__3LYt7");
    let dots = document.querySelectorAll(`.EAE_CheckboxSlide__3l7rx`);
    dots.forEach((item, id) => {
      item.style.backgroundColor = "white";
    });
    if (current_slide == 0) {
      setPrevCheckbox(slides_length-1);
      document.querySelector(`#dot-${slides_length-1}`).style.backgroundColor = "#00C6C6";
    } else {
      setPrevCheckbox(current_slide);
      document.querySelector(`#dot-${current_slide-1}`).style.backgroundColor = "#00C6C6";
    }
    slides.forEach((item, id) => {
      if (current_slide == 0) {
        item.style.transform = `translateX(-${(slides_length-1)*(item.offsetWidth+120)}px)`;
        setSlide(slides_length-1);
      } else if (current_slide < slides_length) {
        item.style.transform = `translateX(-${(current_slide-1)*(item.offsetWidth+120)}px)`;
        setSlide(current_slide-1);
      }
    });
  }

  const nextSlide = (e) => {
    let slides = document.querySelectorAll(".EAE_ServiceSlide__3LYt7");
    let dots = document.querySelectorAll(`.EAE_CheckboxSlide__3l7rx`);
    dots.forEach((item, id) => {
      item.style.backgroundColor = "white";
    });
    if (current_slide == slides_length) {
      setPrevCheckbox(0);
      document.querySelector(`#dot-${0}`).style.backgroundColor = "#00C6C6";
    } else {
      setPrevCheckbox(current_slide-1);
      document.querySelector(`#dot-${current_slide}`).style.backgroundColor = "#00C6C6";
    }
    slides.forEach((item, id) => {
      if (current_slide == slides_length) {
        item.style.transform = `translateX(0px)`;
        setSlide(1);
      } else if (current_slide < slides_length) {
        item.style.transform = `translateX(-${current_slide*(item.offsetWidth+120)}px)`;
        setSlide(current_slide+1);
      }
    });
  }
  const checkboxHandler = (e) => {
    const checkbox_data = +e.target.getAttribute("data");
    setPrevCheckbox(checkbox_data);
    let dots = document.querySelectorAll(`.EAE_CheckboxSlide__3l7rx`);
    dots.forEach((item, id) => {
      item.style.backgroundColor = "white";
    });
    e.target.style.backgroundColor = "#00C6C6";
    let slides = document.querySelectorAll(".EAE_ServiceSlide__3LYt7");
    slides.forEach((item, id) => {
      if (true) {
        item.style.transform = `translateX(-${(checkbox_data)*(item.offsetWidth+120)}px)`;
        setSlide(checkbox_data);
      }
    });
  }
  let checkboxes_arr = [];
  for(let i=0; i < slides_length; i++) {
    checkboxes_arr.push(<a id={`dot-${i}`} onClick={checkboxHandler} data={i} className={styles.CheckboxSlide} key={i}></a>);
  }
  return (
    <div className={styles.containerSlider}>
        <h2 className={styles.HeaderText}>{"Наши услуги"}</h2>
        <div className={styles.conteinerSliderView}>
            <div className={styles.sliderBtnBlock} onClick={(e) => prevSlide(e)}>
                <img className={styles.sliderBtn} src="/assets/img/back-button.svg" />
            </div>
            <div className={styles.ServicesSlidesContainer}>
                {
                    props.slides.map((item, id) => {
                        return (
                            <ServiceSlide image={item.image} header={item.header} text={item.text}/>
                        )
                    })
                }
            </div>
            <div className={styles.sliderBtnBlock} onClick={(e) => nextSlide(e)}>
                <img className={styles.sliderBtn} src="/assets/img/next-button.svg" />
            </div>
        </div>
        <div className={styles.sliderItemsBlock}>
            {checkboxes_arr}
        </div>
    </div>
  );
};

export default OurServices;
