import React from "react";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import AOS from "aos";
import "./Simple1.scss";

function Simple1() {
  const [aboutIndoSuspensions, setAboutIndoSuspensions] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("aboutIndoSuspensions").then((res) => {
      setAboutIndoSuspensions(res.data);
    });
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="simple_1">
      <div className="bContainer container">
        <div className="wrapper">
          {aboutIndoSuspensions &&
            aboutIndoSuspensions.map((aboutIndoSuspensions) => (
              <div
                className="left_box"
                data-aos="fade-right"
                key={aboutIndoSuspensions.id}
              >
                <img src={aboutIndoSuspensions.fileUrl} alt="there is Img" />
              </div>
            ))}
          {aboutIndoSuspensions &&
            aboutIndoSuspensions.map((aboutIndoSuspensions) => (
              <div
                className="right_box"
                data-aos="fade-left"
                key={aboutIndoSuspensions.id}
              >
                <h1>
                  {i18n.language === "uz"
                    ? aboutIndoSuspensions.title_uz
                    : i18n.language === "ru"
                    ? aboutIndoSuspensions.title_ru
                    : aboutIndoSuspensions.title_en}
                </h1>
                <p>
                  {i18n.language === "uz"
                    ? aboutIndoSuspensions.description_uz
                    : i18n.language === "ru"
                    ? aboutIndoSuspensions.description_ru
                    : aboutIndoSuspensions.description_en}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Simple1;
