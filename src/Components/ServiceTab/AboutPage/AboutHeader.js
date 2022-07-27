import React, { useState, useEffect } from "react";
import "./AboutHeader.scss";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";

function AboutHeader() {
  const [aboutHeaders, setAboutHeaders] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("aboutHeaders").then((res) => {
      setAboutHeaders(res.data);
    });
  }, []);
  return (
    <div>
      {aboutHeaders &&
        aboutHeaders.length &&
        aboutHeaders.map((aboutHeaders) => (
          <div
            className="ab_header"
            style={{
              backgroundImage: `url(${aboutHeaders.fileUrl})`,
            }}
            key={aboutHeaders.id}
          >
            <div className="wrapper">
              <div className="intro">
                <h1>
                  {i18n.language === "uz"
                    ? aboutHeaders.title_uz
                    : i18n.language === "ru"
                    ? aboutHeaders.title_ru
                    : aboutHeaders.title_en}
                </h1>
                <p>
                  <a href="/">Bosh sahifa</a> /{" "}
                  {i18n.language === "uz"
                    ? aboutHeaders.description_uz
                    : i18n.language === "ru"
                    ? aboutHeaders.description_ru
                    : aboutHeaders.description_en}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AboutHeader;
