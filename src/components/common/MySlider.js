import Slider from "react-slick";
import React from "react";
import classes from "./MySlider.module.scss";



const MySlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className={classes.mySlider} {...settings}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/save_me/1.png`} alt="img" />
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/save_me/2.png`} alt="img" />
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/save_me/3.png`} alt="img" />
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/save_me/4.png`} alt="img" />
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/save_me/5.png`} alt="img" />
        </div>
    
    </Slider>
  );
};

export default MySlider;
