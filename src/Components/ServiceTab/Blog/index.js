import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import wallpaper from "../../../assets/news/newswallpaper.png";
import { instance } from "../../../API/api";
import Share from "./Share";

import blog from "./index.module.scss";

function IndexBlog() {
  const [newsMains, setNewsMains] = useState();
  const { i18n } = useTranslation();
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    instance.get(`newsMains/${id}`).then((res) => {
      setNewsMains(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          {newsMains && (
            <>
              <div className={`col-md-7 ${blog.image}`}>
                <img
                  src={
                    newsMains.fileUrl.includes("http")
                      ? newsMains.fileUrl
                      : process.env.REACT_APP_PHOTO_URL + newsMains.fileUrl ||
                        wallpaper
                  }
                  alt="This is animage"
                />
              </div>
              <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                <h1 className={`text-center py-4 ${blog.blog__title}`}>
                  <b>
                    {i18n.language === "uz"
                      ? newsMains.title_uz
                      : i18n.language === "ru"
                      ? newsMains.title_ru
                      : newsMains.title_en}
                  </b>
                </h1>
                <p>
                  <b>{newsMains.inserted.slice(0, 10)}</b>
                </p>
                <p className="text-center">
                  {i18n.language === "uz"
                    ? newsMains.short_description_uz
                    : i18n.language === "ru"
                    ? newsMains.short_description_ru
                    : newsMains.short_description_en}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={`p-5 pb-4 ${blog.share}`}>
            <hr />
            <Share
              info={
                "Stand News: Independent outlet to close after senior staff arrested"
              }
            />
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className={`row d-flex justify-content-center ${blog.blog__endText}`}
        >
          {newsMains && (
            <div className={`col-12 col-md-10 col-lg-7`}>
              <p>
                {i18n.language === "uz"
                  ? newsMains.description_uz
                  : i18n.language === "ru"
                  ? newsMains.description_ru
                  : newsMains.description_en}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default IndexBlog;
