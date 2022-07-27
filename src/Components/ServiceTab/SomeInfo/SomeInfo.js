import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

import message1 from "../../../assets/Message1.png";
import message2 from "../../../assets/Message2.png";
import message3 from "../../../assets/Message3.png";
import { instance } from "../../../API/api";

import "animate.css";
import "./someInfo.scss";
import "aos/dist/aos.css";

function SomeInfo() {
  const { i18n } = useTranslation();
  const images = [message1, message2, message3];

  const [homeLocations, setHomeLocations] = useState();
  useEffect(() => {
    instance.get("homeLocations").then((res) => {
      setHomeLocations(res.data);
      AOS.init({
        duration: 1000,
      });
    });
  }, []);

  return (
    <div className="someinfo container " id="someInfo">
      <div className="wrapper">
        {homeLocations &&
          homeLocations.length &&
          homeLocations.map((homeLocations, index) => (
            <div className="col" data-aos="fade-down" key={homeLocations.id}>
              <div className="information">
                <div className="for_img">
                  <img src={images[index]} alt="Thisisanimage" />{" "}
                </div>
                <div className="about">
                  <h2>
                    {i18n.language === "uz"
                      ? homeLocations.title_uz
                      : i18n.language === "ru"
                      ? homeLocations.title_ru
                      : homeLocations.title_en}
                  </h2>
                  <p>
                    {i18n.language === "uz"
                      ? homeLocations.description_uz
                      : i18n.language === "ru"
                      ? homeLocations.description_ru
                      : homeLocations.description_en}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default SomeInfo;
