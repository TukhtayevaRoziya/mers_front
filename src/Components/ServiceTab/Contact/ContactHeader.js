import React, { useState, useEffect } from "react";
import "./ContactHeader.scss";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";

function ContactHeader() {
  const [contactHeaders, setContactHeaders] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("contactHeaders").then((res) => {
      setContactHeaders(res.data);
    });
  }, []);
  return (
    <div>
      {contactHeaders &&
        contactHeaders.length &&
        contactHeaders.map((contactHeaders) => (
          <div
            className="ab_header"
            style={{
              backgroundImage: `url(${contactHeaders.fileUrl})`,
            }}
            key={contactHeaders.id}
          >
            <div className="wrapper">
              <div className="intro">
                <h1>
                  {i18n.language === "uz"
                    ? contactHeaders.title_uz
                    : i18n.language === "ru"
                    ? contactHeaders.title_ru
                    : contactHeaders.title_en}
                </h1>
                <p>
                  <a href="/">Bosh sahifa</a> /{" "}
                  {i18n.language === "uz"
                    ? contactHeaders.description_uz
                    : i18n.language === "ru"
                    ? contactHeaders.description_ru
                    : contactHeaders.description_en}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ContactHeader;
