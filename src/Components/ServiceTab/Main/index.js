/* eslint-disable no-sequences */
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { instance } from "../../../API/api";
// import { useTranslation } from "react-i18next";
import Button from "../Button";
import wallpaper1 from "../../../assets/wallpapers/1.png";
import wallpaper2 from "../../../assets/wallpapers/2.png";
import wallpaper3 from "../../../assets/wallpapers/3.png";
import "animate.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.module.scss";

const Main = () => {
  // const { i18n } = useTranslation();
  // eslint-disable-next-line
  const [imagePick, setImagePick] = useState(wallpaper1);
  // eslint-disable-next-line
  const [imagePick1, setImagePick1] = useState(wallpaper2);
  // eslint-disable-next-line
  const [imagePick2, setImagePick2] = useState(wallpaper3);
  //eslint-disable-next-line
  const [homeSlider, setHomeSlider] = useState([]);

  useEffect(() => {
    instance.get("homeSliders").then((res) => {
      setHomeSlider(res.data);
    });
  }, []);

  const map2 = homeSlider.map((a) => (
    <div
      id={a.id}
      className={a.class}
      role="tabpanel"
      aria-labelledby={a.ariaLabelledby}
      key={a.id}
    >
      <h1
        className={`animate__animated animate__fadeInRight animate__fast ${styles.max_h1}`}
      >
        <b>{a.title_uz}</b>
      </h1>
      <h3
        className={`mb-3 animate__animated animate__slideInLeft animate__fast ${styles.max_h3}`}
      >
        {a.description_uz}
      </h3>
      <Button name={"Bog'lanish"} link={"/contact"} />
    </div>
  ));

  return (
    <>
      <Carousel
        autoPlay={true}
        showIndicators={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        interval={3000}
      >
        <div
          style={{ backgroundImage: `url(${imagePick})` }}
          className={styles.parent}
        >
          <div className={`container my_code pt-5  ${styles.my_code}`}>
            <div
              className={`col-12 col-md-7 col-lg-6 col-xl-6 d-flex align-items-start ${styles.main__slider_fix}`}
            >
              <div className="tab-content" id="v-pills-01-tab">
                {imagePick === wallpaper1 ? (
                  map2[1]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[0].fileUrl ? (
                  map2[1]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[1].fileUrl ? (
                  map2[2]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[2].fileUrl ? (
                  map2[0]
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${imagePick2})` }}
          className={styles.parent}
        >
          <div className={`container my_code pt-5  ${styles.my_code}`}>
            <div
              className={`col-12 col-md-7 col-lg-6 col-xl-6 d-flex align-items-start ${styles.main__slider_fix}`}
            >
              <div className="tab-content" id="v-pills-01-tab">
                {imagePick === wallpaper1 ? (
                  map2[0]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[0].fileUrl ? (
                  map2[0]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[1].fileUrl ? (
                  map2[1]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[2].fileUrl ? (
                  map2[2]
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${imagePick1})` }}
          className={styles.parent}
        >
          <div className={`container my_code pt-5  ${styles.my_code}`}>
            <div
              className={`col-12 col-md-7 col-lg-6 col-xl-6 d-flex align-items-start ${styles.main__slider_fix}`}
            >
              <div className="tab-content" id="v-pills-01-tab">
                {imagePick === wallpaper1 ? (
                  map2[2]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[0].fileUrl ? (
                  map2[2]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[1].fileUrl ? (
                  map2[0]
                ) : imagePick ===
                  process.env.REACT_APP_PHOTO_URL + homeSlider[2].fileUrl ? (
                  map2[1]
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Main;
