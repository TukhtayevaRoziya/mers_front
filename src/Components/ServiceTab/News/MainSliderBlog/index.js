import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import newsblog from "./index.module.scss";

function Index({ textNews }) {
  const { i18n } = useTranslation();

  return (
    <div className={newsblog.parent}>
      {textNews && textNews.length && (
        <>
          <NavLink
            className={newsblog.link}
            to={`${textNews[0].id}`}
            key={textNews[0].id}
          >
            <div className={newsblog.img}>
              <img
                src={process.env.REACT_APP_PHOTO_URL + textNews[0].fileUrl}
                alt="Slide"
              />
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}
            >
              <p className={newsblog.title}>
                <b>
                  {i18n.language === "uz"
                    ? textNews[0].title_uz
                    : i18n.language === "ru"
                    ? textNews[0].title_ru
                    : textNews[0].title_en}
                </b>
              </p>
              <p className={newsblog.date}>
                {textNews[0].inserted.slice(0, 10)}
              </p>
            </div>
          </NavLink>
          <NavLink
            className={newsblog.link}
            to={`${textNews[1].id}`}
            key={textNews[1].id}
          >
            <div className={newsblog.img}>
              <img
                src={process.env.REACT_APP_PHOTO_URL + textNews[0].fileUrl}
                alt="Slide"
              />
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}
            >
              <p className={newsblog.title}>
                <b>
                  {i18n.language === "uz"
                    ? textNews[1].title_uz
                    : i18n.language === "ru"
                    ? textNews[1].title_ru
                    : textNews[1].title_en}
                </b>
              </p>
              <p className={newsblog.date}>
                {textNews[1].inserted.slice(0, 10)}
              </p>
            </div>
          </NavLink>
          <NavLink
            className={newsblog.link}
            to={`${textNews[2].id}`}
            key={textNews[2].id}
          >
            <div className={newsblog.img}>
              <img
                src={process.env.REACT_APP_PHOTO_URL + textNews[0].fileUrl}
                alt="Slide"
              />
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}
            >
              <p className={newsblog.title}>
                <b>
                  {i18n.language === "uz"
                    ? textNews[2].title_uz
                    : i18n.language === "ru"
                    ? textNews[2].title_ru
                    : textNews[2].title_en}
                </b>
              </p>
              <p className={newsblog.date}>
                {textNews[2].inserted.slice(0, 10)}
              </p>
            </div>
          </NavLink>
          <NavLink
            className={newsblog.link}
            to={`${textNews[3].id}`}
            key={textNews[3].id}
          >
            <div className={newsblog.img}>
              <img
                src={process.env.REACT_APP_PHOTO_URL + textNews[0].fileUrl}
                alt="Slide"
              />
            </div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-2 ${newsblog.texts}`}
            >
              <p className={newsblog.title}>
                <b>
                  {i18n.language === "uz"
                    ? textNews[3].title_uz
                    : i18n.language === "ru"
                    ? textNews[3].title_ru
                    : textNews[3].title_en}
                </b>
              </p>
              <p className={newsblog.date}>
                {textNews[3].inserted.slice(0, 10)}
              </p>
            </div>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Index;
