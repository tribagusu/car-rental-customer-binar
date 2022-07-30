import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowButton from "../../assets/Left-arrow-button.png";
import "./style.css";

const Testimonial = (props) => {
  const { dataTestimoni } = props;
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="carousel" id="testimonial">
      <h2>Testimonial</h2>
      <p>Berbagai review positif dari para pelanggan kami</p>
      <div className="carousel__container">
        <Slider ref={setSliderRef} {...settings}>
          {dataTestimoni.map((item) => (
            <div>
              <div className="carousel__card">
                <div className="carousel__card__left">
                  <img src={item.imgsrc} alt="" />
                </div>
                <div className="carousel__card__right">
                  <li>{item.icon}</li>
                  <p>{item.comment}</p>
                  <small>{item.name}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="arrow-button">
          <button onClick={sliderRef?.slickPrev} className="arrow-button-left">
            <img src={arrowButton} />
          </button>
          <button onClick={sliderRef?.slickNext} className="arrow-button-right">
            <img src={arrowButton} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
