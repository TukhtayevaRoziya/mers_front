import React, { useState, useEffect } from "react";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./mainPart.scss";
function Repair() {
  const { i18n } = useTranslation();
  const [serviceAutoRepairs, setServiceAutoRepairs] = useState();

  useEffect(() => {
    instance.get("serviceAutoRepairs").then((res) => {
      setServiceAutoRepairs(res.data);
    });
    AOS.init({
      duration: 1800,
    });
  }, []);
  return (
    <div className="container" data-aos="flip-up">
      <div className="first_SecA">
        <div className="wrapper">
          {serviceAutoRepairs &&
            serviceAutoRepairs.map((serviceAutoRepairs) => (
              <div className="l_box" key={serviceAutoRepairs.id}>
                <h1>
                  {i18n.language === "uz"
                    ? serviceAutoRepairs.title_uz
                    : i18n.language === "ru"
                    ? serviceAutoRepairs.title_ru
                    : serviceAutoRepairs.title_en}
                </h1>
                <p>
                  {i18n.language === "uz"
                    ? serviceAutoRepairs.description_uz
                    : i18n.language === "ru"
                    ? serviceAutoRepairs.description_ru
                    : serviceAutoRepairs.description_en}
                </p>
              </div>
            ))}
          {serviceAutoRepairs &&
            serviceAutoRepairs.map((serviceAutoRepairs) => (
              <div className="r_box" key={serviceAutoRepairs.id}>
                <img src={serviceAutoRepairs.fileUrl} alt="" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Repair;
