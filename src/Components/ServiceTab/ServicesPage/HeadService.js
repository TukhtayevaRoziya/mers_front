import React, { useState, useEffect } from "react";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import style from "./Head.module.scss";
import "./Head.module.scss";

function HeadService() {
  const [serviceHeaders, setServiceHeaders] = useState();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    instance.get("serviceHeaders").then((res) => {
      setServiceHeaders(res.data);
    });
  }, []);

  return (
    <div className={`ser_head ${style.body}`}>
      {serviceHeaders && serviceHeaders.length && (
        <div
          className="ab_header"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_PHOTO_URL + serviceHeaders[0].fileUrl
            })`,
            height: "90vh",
          }}
          key={serviceHeaders[0].id}
        >
          <div
            className="wrapper d-flex align-items-center justify-content-center text-center"
            style={{
              height: "90vh",
            }}
          >
            <div className="intro">
              <h1>
                {i18n.language === "uz"
                  ? serviceHeaders[0].title_uz
                  : i18n.language === "ru"
                  ? serviceHeaders[0].title_ru
                  : serviceHeaders[0].title_en}
              </h1>
              <p
                style={{
                  color: "#00C2FF",
                  fontSize: "1.5rem",
                }}
              >
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {t("navbar.navlink1")}
                </a>{" "}
                / {""}
                {i18n.language === "uz"
                  ? serviceHeaders[0].description_uz
                  : i18n.language === "ru"
                  ? serviceHeaders[0].description_ru
                  : serviceHeaders[0].description_en}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeadService;
