import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FirstC.scss";

function FirstC() {
  const [aboutSliders, setAboutSliders] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("aboutSliders").then((res) => {
      setAboutSliders(res.data);
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="firstC container">
      <div className="container-fluid bContainer">
        <Slider {...settings}>
          {aboutSliders &&
            aboutSliders.length &&
            aboutSliders.map((aboutSliders) => (
              <div key={aboutSliders.id}>
                <img
                  src={process.env.REACT_APP_PHOTO_URL + aboutSliders.fileUrl}
                  alt="Thisisanimage"
                />
              </div>
            ))}
        </Slider>
        <div className="someAbout">
          {aboutSliders && aboutSliders.length && (
            <>
              <div className="right_box">
                <h1>
                  {i18n.language === "uz"
                    ? aboutSliders[0].title_uz
                    : i18n.language === "ru"
                    ? aboutSliders[0].title_ru
                    : aboutSliders[0].title_en}
                </h1>
              </div>
              <div className="left_box">
                {i18n.language === "uz"
                  ? aboutSliders[0].description_uz
                  : i18n.language === "ru"
                  ? aboutSliders[0].description_ru
                  : aboutSliders[0].description_en}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FirstC;
