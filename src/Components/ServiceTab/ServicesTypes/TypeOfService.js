import React, { useState, useEffect } from "react";
// import service1 from "../../../assets/service1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "./TypeService.scss";
import { Link } from "react-router-dom";
function TypeOfService() {
  const [homeInfoDetails, setHomeInfoDetails] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("homeInfoDetails").then((res) => {
      setHomeInfoDetails(res.data);
    });
    AOS.init({});
  }, []);

  return (
    <div className="typeOfService container mx-auto">
      <div className="intro" data-aos="fade-down">
        <h1>Avtomobillarni sozlash va boshqa xizmatlar</h1>
        <p>
          Mashinangizga o'z vaqtida e'tibor berish, sizni noqulay vaziyatlarga
          solib qoymaydi.
        </p>
      </div>
      <div className="main_sec">
        <div className="bContainer">
          {homeInfoDetails &&
            homeInfoDetails.length &&
            homeInfoDetails.map((homeInfoDetails) => (
              <div
                className="sCol"
                data-aos="fade-right"
                key={homeInfoDetails.id}
              >
                <div className="info">
                  <Link to="/services">
                    <div className="for_img">
                      <img
                        src={
                          process.env.REACT_APP_PHOTO_URL +
                          homeInfoDetails.fileUrl
                        }
                        alt="Thisinanimage"
                      />
                    </div>
                    <div className="some_text">
                      <h3>
                        {i18n.language === "uz"
                          ? homeInfoDetails.title_uz
                          : i18n.language === "ru"
                          ? homeInfoDetails.title_ru
                          : homeInfoDetails.title_en}
                      </h3>
                      <p>
                        {i18n.language === "uz"
                          ? homeInfoDetails.description_uz
                          : i18n.language === "ru"
                          ? homeInfoDetails.description_ru
                          : homeInfoDetails.description_en}
                      </p>
                    </div>
                    <div className="more_link">
                      Ko'proq o'qish
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default TypeOfService;
