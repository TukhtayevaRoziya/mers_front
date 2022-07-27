import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { instance } from "../../../API/api";
import AOS from 'aos'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./mainPart.scss";

function MainPart() {
  const { i18n } = useTranslation();
  const [serviceRepairs, setServiceRepairs] = useState();
  useEffect(() => {
    instance.get("serviceRepairs").then((res) => {
      setServiceRepairs(res.data);
      console.log(res.data);
    });
    AOS.init()
  }, []);

  return (
    <div className="MainPart" >
      <div className="bContainer container">
        <div className="second_Sec">
          {serviceRepairs &&
            serviceRepairs.length &&
            serviceRepairs.map((serviceRepairs) => (
              <div className="wrapper" key={serviceRepairs.id}>
                <div className="topic_this">
                  <div className="clz">
                    <NavLink to={`${serviceRepairs.id}`}>
                      <h3>
                        {i18n.language === "uz"
                          ? serviceRepairs.title_uz
                          : i18n.language === "ru"
                          ? serviceRepairs.title_ru
                          : serviceRepairs.title_en}
                      </h3>
                      <h5>
                        {i18n.language === "uz"
                          ? serviceRepairs.short_description_uz
                          : i18n.language === "ru"
                          ? serviceRepairs.short_description_ru
                          : serviceRepairs.short_description_en}
                      </h5>
                      <FontAwesomeIcon className="icon" icon={faArrowRight} />
                    </NavLink>
                  </div>
                </div>
                <div className="fixed_img">
                  <img src={serviceRepairs.fileUrl} alt="Thisisanimage" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainPart;
