import React, {useState} from "react";

import styles from "../EAE.module.scss";

const CommentsSlider = () => {
    const reviews = [
        {
            name: "Vlad",
            rateName: "Vlad D",
            rate: 4,
            photo: "user_image1.png",
            review: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque purus sed libero mi turpis. Donec lorem morbi fermentum massa cursus nec consequat. Commodo, justo, risus, orci sit pellentesque nibh morbi enim mattis. Vulputate sed leo mattis nec id ultricies ut sit. "
        },
        {
            name: "Den",
            rateName: "Den D",
            rate: 5,
            photo: "user_image2.png",
            review: "some text some text some text some text"
        },
        {
            name: "Sasha",
            rateName: "Sasha D",
            rate: 3,
            photo: "user_image3.png",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque purus sed libero mi turpis. Donec lorem morbi fermentum massa cursus "
        },
        {
            name: "Anton",
            rateName: "Anton D",
            rate: 1,
            photo: "user_image4.png",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque purus sed libero mi turpis. Donec lorem "
        },
        {
            name: "Victor",
            rateName: "Victor M",
            rate: 4,
            photo: "user_image5.png",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque purucibus neque purucibus neque purus sed libero mi turpis. Donec lorem "
        }
    ]
    const [currentReview, setReview] = useState(0);
    const [prevImage, setPrevImage] = useState(reviews.length-1);
    const [nextImage, setNextImage] = useState(1);
    const prevReview = () => {
        if (currentReview === 0) {
            setReview(reviews.length-1);
            setPrevImage(reviews.length-2);
            setNextImage(currentReview);
        } else {
            setReview(currentReview-1);
            if(currentReview-2 < 0) {
                setNextImage(reviews.length-1);
            } else {
                setPrevImage(currentReview-2);
            }
            setNextImage(currentReview);
        };
    };
    const nextReview = () => {
        if (currentReview+1 !== reviews.length) {
            setReview(currentReview+1);
            setPrevImage(currentReview);
            if(currentReview+2 > reviews.length-1) {
                setNextImage(0);
            } else {
                setNextImage(currentReview+2);
            }
        } else {
            setReview(0);
            setPrevImage(reviews.length-1);
            setNextImage(1);
        };
    };
    const renderStars = () => {
        const fill_stars = reviews[currentReview].rate;
        const unfill_stars = 5 - reviews[currentReview].rate;
        let stars_arr = [];
        for (let i=0; i<5; i++) {
            if (i<fill_stars) {
                stars_arr.push(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g></g></svg>
                );
            } else {
                stars_arr.push(
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: 'none'}}><g transform="translate(12.814,12.814) scale(0.851,0.851)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g id="original-icon 1" fill="none" stroke="#44ccbb" strokeWidth={20} strokeLinejoin="round"><path d="M50.16667,151.21667c-5.01667,3.58333 -12.18333,-1.43333 -10.75,-7.88333l9.31667,-40.85l-31.53333,-27.23333c-5.01667,-4.3 -2.15,-12.18333 4.3,-12.9l41.56667,-3.58333l15.76667,-37.98333c2.86667,-6.45 11.46667,-6.45 14.33333,0l15.76667,37.98333l41.56667,3.58333c6.45,0.71667 9.31667,8.6 4.3,12.9l-31.53333,27.23333l9.31667,40.85c2.15,6.45 -5.01667,11.46667 -10.75,7.88333l-35.83333,-21.5z" /></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /><g id="original-icon" fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g><path d fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /><path d fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /></g></g></svg>
                )
            }
        }
        return stars_arr;
    }
    const View = ({ textMarkup }) => {

        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: textMarkup }}/>
            </>
        )
    }    
    return (
        <div className={styles.reviewSliderContainer}>
            <h2 className={styles.HeaderTextReview}>{"Отзывы"}</h2>
            <div className="container_slider">
            <div className="wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1208 608">
                <style dangerouslySetInnerHTML={{__html: "\n                tspan { white-space:pre }\n                .shp0 { fill: none;stroke: #000000;stroke-width: 3;stroke-dasharray: 44, 44 } \n            " }} />
                <path id="shape" className="shp0" d="M604 1204C272.2 1204 4 935.8 4 604C4 272.2 272.2 4 604 4C935.8 4 1204 272.2 1204 604C1204 935.8 935.8 1204 604 1204Z" />
                </svg>
                <div className="img-wrap iw1"><div className="img img1">
                    <View textMarkup={`<img class='transition' src='/assets/img/slider_comment_images/${reviews[prevImage].photo}' />`}/>
                    {/* <img src={`/assets/img/slider_comment_images/${reviews[prevImage].photo}`} alt="" /> */}
                    </div></div>
                <div className="img-wrap iw2"><div className="img img2 active">
                    <View textMarkup={`<img class='transition' src='/assets/img/slider_comment_images/${reviews[currentReview].photo}' alt="" />`}/>
                    {/* <img src={`/assets/img/slider_comment_images/${reviews[currentReview].photo}`} alt="" /> */}
                    </div></div>
                <div className="img-wrap iw3"><div className="img img3">
                    <View textMarkup={`<img class='transition' src='/assets/img/slider_comment_images/${reviews[nextImage].photo}' alt="" />`}/>
                    {/* <img src={`/assets/img/slider_comment_images/${reviews[nextImage].photo}`} alt="" /> */}
                    </div></div>
                {/* <div className="img-wrap iw4"><div className="img img4"><img src="https://portal-kultura.ru/upload/iblock/552/Скриншот%2014-10-2020%20182741.jpg" alt="" /></div></div> */}
                <div className="left arrows" onClick={prevReview}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M73.7665,141.2335c1.40108,1.40108 3.23217,2.09983 5.06683,2.09983c1.83467,0 3.66575,-0.69875 5.06683,-2.09983c2.79858,-2.79858 2.79858,-7.33508 0,-10.13367l-37.93317,-37.93317h97.36633c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667h-97.36633l37.93317,-37.93317c2.79858,-2.79858 2.79858,-7.33508 0,-10.13367c-2.79858,-2.79858 -7.33508,-2.79858 -10.13367,0l-50.16667,50.16667c-2.79858,2.79858 -2.79858,7.33508 0,10.13367z" /></g></g></svg></div>
                <div className="right arrows" onClick={nextReview}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M148.40017,80.93317l-50.16667,-50.16667c-2.79858,-2.79858 -7.33508,-2.79858 -10.13367,0c-2.79858,2.79858 -2.79858,7.33508 0,10.13367l37.93317,37.93317h-97.36633c-3.956,0 -7.16667,3.21067 -7.16667,7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h97.36633l-37.93317,37.93317c-2.79858,2.79858 -2.79858,7.33508 0,10.13367c1.40108,1.40108 3.23217,2.09983 5.06683,2.09983c1.83467,0 3.66575,-0.69875 5.06683,-2.09983l50.16667,-50.16667c2.79858,-2.79858 2.79858,-7.33508 0,-10.13367z" /></g></g></svg></div>
                <div className="name"><View textMarkup={`<span class='transition'>${reviews[currentReview].name}</span>`}/></div>
                <div className="comment-block">
                <div className="rating">
                    <div className="rate-name"><View textMarkup={`<span class='transition'>${reviews[currentReview].rateName}</span>`}/></div>
                    <div className="rate-stars">
                        {renderStars()}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#44ccbb"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 172 172" style={{fill: 'none'}}><g transform="translate(12.814,12.814) scale(0.851,0.851)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g id="original-icon 1" fill="none" stroke="#44ccbb" strokeWidth={20} strokeLinejoin="round"><path d="M50.16667,151.21667c-5.01667,3.58333 -12.18333,-1.43333 -10.75,-7.88333l9.31667,-40.85l-31.53333,-27.23333c-5.01667,-4.3 -2.15,-12.18333 4.3,-12.9l41.56667,-3.58333l15.76667,-37.98333c2.86667,-6.45 11.46667,-6.45 14.33333,0l15.76667,37.98333l41.56667,3.58333c6.45,0.71667 9.31667,8.6 4.3,12.9l-31.53333,27.23333l9.31667,40.85c2.15,6.45 -5.01667,11.46667 -10.75,7.88333l-35.83333,-21.5z" /></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /><g id="original-icon" fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter"><path d="M86,129.71667l35.83333,21.5c5.73333,3.58333 12.9,-1.43333 10.75,-7.88333l-9.31667,-40.85l31.53333,-27.23333c5.01667,-4.3 2.15,-12.18333 -4.3,-12.9l-41.56667,-3.58333l-15.76667,-37.98333c-2.86667,-6.45 -11.46667,-6.45 -14.33333,0l-15.76667,37.98333l-41.56667,3.58333c-6.45,0.71667 -9.31667,8.6 -4.3,12.9l31.53333,27.23333l-9.31667,40.85c-1.43333,6.45 5.73333,11.46667 10.75,7.88333z" /></g><path d fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /><path d fill="none" stroke="none" strokeWidth={1} strokeLinejoin="miter" /></g></g></svg> */}
                    </div>
                    <div className="rate-reviews"><View textMarkup={`<span class='transition'>${reviews.length} отзывов</span>`}/></div>
                </div>
                <div className="text"><View textMarkup={`<span class='transition'>${reviews[currentReview].review}</span>`}/></div>
                </div>
            </div>
            </div>
        </div>
      );
};

export default CommentsSlider;