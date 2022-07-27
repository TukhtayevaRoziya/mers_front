import React, { useState, useEffect } from "react";
// import thirdS from "../../../assets/About/thirdS.png";
// import thirdS2 from "../../../assets/About/thirdS2.png";
import { instance } from "../../../API/api";
// import { useTranslation } from "react-i18next";

import "./Simple2.scss";

function Simple2() {
  //eslint-disable-next-line
  const [aboutInfoExperiences, setAboutInfoExperiences] = useState();
  // const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("aboutInfoExperiences").then((res) => {
      setAboutInfoExperiences(res.data);
    });
  }, []);
  return (
    <div className="Simple2">
      <div className="container">
        {/* <div className="wrapper">
          {aboutInfoExperiences &&
            aboutInfoExperiences.length &&
            aboutInfoExperiences.map((aboutInfoExperiences) => (
              <div className="left_box">
                <img src={thirdS} alt="Thisisanimage" />
                <h1>
                  {i18n.language === "uz"
                    ? aboutInfoExperiences[0].title_uz
                    : i18n.language === "ru"
                    ? aboutInfoExperiences[0].title_ru
                    : aboutInfoExperiences[0].title_en}
                </h1>
                <p>
                  {i18n.language === "uz"
                    ? aboutInfoExperiences[0].title_uz
                    : i18n.language === "ru"
                    ? aboutInfoExperiences[0].title_ru
                    : aboutInfoExperiences[0].title_ee}
                </p>
              </div>
            ))}
          ;
          {aboutInfoExperiences &&
            aboutInfoExperiences.length &&
            aboutInfoExperiences.map((aboutInfoExperiences) => (
              <div className="right_box">
                <img
                  src={aboutInfoExperiences[1].fileUrl}
                  alt="Thisisanimage"
                />
                <h1>
                  {i18n.language === "uz"
                    ? aboutInfoExperiences[1].title_uz
                    : i18n.language === "ru"
                    ? aboutInfoExperiences[1].title_ru
                    : aboutInfoExperiences[1].title_en}
                </h1>
                <p>
                  {i18n.language === "uz"
                    ? aboutInfoExperiences[1].description_uz
                    : i18n.language === "ru"
                    ? aboutInfoExperiences[1].description_ru
                    : aboutInfoExperiences[1].description_en}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}

export default Simple2;
