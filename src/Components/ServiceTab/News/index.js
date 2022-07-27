import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, Link } from "react-router-dom";
import { Autoplay } from "swiper";

import wallpaper from "../../../assets/news/newswallpaper.png";
import { Preloader } from "./../../preloader/Preloader";
import JumbotronPosts from "./JumbotronPosts";
import { instance } from "../../../API/api";

import newsblog from "./MainSliderBlog/index.module.scss";
import news from "./index.module.scss";
import "./main_news.scss";
import "swiper/css";

function Index() {
  //eslint-disable-next-line
  const [allNews, setAllNews] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    instance.get("newsMains").then((res) => {
      setAllNews(res.data);
    });
  }, [allNews]);

  let textNews = [],
    videoNews = [];

  if (allNews && allNews.length) {
    textNews = allNews.filter((news) => news.newsCategoryId === 3);
    videoNews = allNews.filter((news) => news.newsCategoryId === 2);
  }

  const mapData =
    textNews &&
    textNews.map((t) => {
      return (
        <SwiperSlide key={t.id}>
          <NavLink className="news_slider" to={`${t.id}`} key={t.id}>
            <div className={newsblog.img}>
              <img
                src={
                  t.fileUrl
                    ? t.fileUrl.includes("http")
                      ? t.fileUrl
                      : process.env.REACT_APP_PHOTO_URL + t.fileUrl
                    : wallpaper
                }
                alt="Slide"
              />
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}
            >
              <p className={newsblog.title}>
                <b>
                  {i18n.language === "uz"
                    ? t.title_uz
                    : i18n.language === "ru"
                    ? t.title_ru
                    : t.title_en}
                </b>
              </p>
              <p className={newsblog.date}>
                {t.inserted ? t.inserted.slice(0, 10) : "04.04.2022"}
              </p>
            </div>
          </NavLink>
        </SwiperSlide>
      );
    });

  return (
    <>
      {allNews && allNews.length ? (
        textNews &&
        textNews.length &&
        videoNews &&
        videoNews.length && (
          <>
            <div
              className={`container-fluid p-0 overflow-hidden main_info ${news.wallpaper}`}
            >
              <div className="row">
                <img
                  src={
                    textNews[textNews.length - 2].fileUrl === ""
                      ? wallpaper
                      : process.env.REACT_APP_PHOTO_URL +
                        textNews[textNews.length - 2].fileUrl
                  }
                  alt="Wallpaper"
                  className="main_info_img"
                />
                <div
                  className={`container-fluid d-flex flex-column ${news.parentMoveBlock}`}
                >
                  <div
                    className={`col-12 col-md-7 col-lg-7 mx-auto d-flex flex-column justify-content-center pt-5 px-5 ${news.moveBlock}`}
                  >
                    <NavLink
                      to={`${textNews[textNews.length - 2].id}`}
                      className={news.mainJumbotronPost}
                    >
                      <h1 className={`${news.title} ${news.mainLink}`}>
                        <b>{textNews[textNews.length - 2].title_uz}</b>
                        <div className={`my-3 ${news.borderTitle}`}></div>
                      </h1>
                      <p className={news.date}>
                        <b>
                          {textNews[textNews.length - 2].inserted
                            ? textNews[textNews.length - 2].inserted.slice(
                                0,
                                10
                              )
                            : "04.04.2022"}
                        </b>
                      </p>
                      <p className={`${news.text} ${news.mainLink}`}>
                        {textNews[textNews.length - 2].short_description_uz}
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={`container-fluid m-0 my-5 ${news.parent}`}>
              <div className="row">
                <div
                  className={`col-1 d-flex justify-content-center align-items-center ${news.save}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  </svg>
                </div>
                <div className="col-11 col-lg-11 m-0 p-0">
                  <Swiper
                    grabCursor={true}
                    watchSlidesProgress={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      423: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      700: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1245: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    className="mySwiper"
                  >
                    {mapData}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="container-fluid my-5">
              <div className="row">
                <div
                  style={{
                    backgroundImage: `url(${
                      process.env.REACT_APP_PHOTO_URL +
                        textNews[textNews.length - 1].fileUrl || wallpaper
                    })`,
                  }}
                  className={`col-12 col-lg-6 d-flex justify-content-center align-items-center ${news.jumbotronPost}`}
                >
                  <Link
                    to={`${textNews[textNews.length - 1].id}`}
                    className={`d-flex justify-content-center ${news.link}`}
                  >
                    <div
                      className={`col col-sm-10 col-md-8 col-lg-10 col-xl-6 px-3 ${news.jumbotronPostDesc}`}
                    >
                      <h3>
                        <b>{textNews[textNews.length - 1].title_uz}</b>
                      </h3>
                      <p>
                        {textNews[textNews.length - 1].short_description_uz}
                      </p>
                    </div>
                  </Link>
                </div>
                <div
                  className={`col-12 col-sm-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center ${news.jumbotronPostParent}`}
                >
                  <JumbotronPosts
                    title={textNews[textNews.length - 2].title_uz}
                    img={
                      process.env.REACT_APP_PHOTO_URL +
                        textNews[textNews.length - 2].fileUrl || wallpaper
                    }
                    date={textNews[textNews.length - 2].inserted.slice(0, 10)}
                    desc={textNews[textNews.length - 2].short_description_uz}
                    id={textNews[textNews.length - 2].id}
                  />
                  <JumbotronPosts
                    title={videoNews[videoNews.length - 1].title_uz}
                    img={videoNews[videoNews.length - 1].fileUrl || wallpaper}
                    date={videoNews[videoNews.length - 1].inserted.slice(0, 10)}
                    desc={videoNews[videoNews.length - 1].short_description_uz}
                    id={videoNews[videoNews.length - 1].id}
                  />
                  <JumbotronPosts
                    title={videoNews[videoNews.length - 2].title_uz}
                    img={videoNews[videoNews.length - 2].fileUrl || wallpaper}
                    date={videoNews[videoNews.length - 2].inserted.slice(0, 10)}
                    desc={videoNews[videoNews.length - 2].short_description_uz}
                    id={videoNews[videoNews.length - 2].id}
                  />
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Index;
