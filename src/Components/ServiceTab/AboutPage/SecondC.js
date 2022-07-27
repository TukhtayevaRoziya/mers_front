import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecondC.scss";

function SecondC() {
  var settings = {
    dots: true,
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
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
  const [aboutInfoVehicles, setAboutInfoVehicles] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("aboutInfoVehicles").then((res) => {
      setAboutInfoVehicles(res.data);
    });
    AOS.init();
  }, []);
  return (
    <div className="SecondC container" data-aos="fade-up-left">
      <div className="bContainer">
        <div className="wrapper">
          {aboutInfoVehicles && aboutInfoVehicles.length && (
            <>
              <div className="left_box">
                <h1>
                  {i18n.language === "uz"
                    ? aboutInfoVehicles[0].title_uz
                    : i18n.language === "ru"
                    ? aboutInfoVehicles[0].title_ru
                    : aboutInfoVehicles[0].title_en}
                </h1>
                <p>
                  {i18n.language === "uz"
                    ? aboutInfoVehicles[0].description_uz
                    : i18n.language === "ru"
                    ? aboutInfoVehicles[0].description_ru
                    : aboutInfoVehicles[0].description_en}
                </p>
              </div>
              <div className="right_box">
                <Slider {...settings}>
                  {aboutInfoVehicles &&
                    aboutInfoVehicles.length &&
                    aboutInfoVehicles.map((aboutInfoVehicles) => (
                      <div key={aboutInfoVehicles.id}>
                        <img
                          src={aboutInfoVehicles.fileUrl}
                          alt="Thisisanimage"
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecondC;
