import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Customer from "./Customer";
// import center from "../../../../assets/testimonials/center.png";
// import left from "../../../../assets/testimonials/left.png";
// import right from "../../../../assets/testimonials/right.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { instance } from "../../../../API/api";
import { useTranslation } from "react-i18next";

function Index() {
  const { i18n } = useTranslation();
  const [homeFeedbacks, setHomeFeedbacks] = useState();

  useEffect(() => {
    instance.get("homeFeedbacks").then((res) => {
      setHomeFeedbacks(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row d-flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
        >
          {homeFeedbacks &&
            homeFeedbacks.length &&
            homeFeedbacks.map((homeFeedbacks) => (
              <SwiperSlide key={homeFeedbacks.id}>
                <Customer
                  image={
                    process.env.REACT_APP_PHOTO_URL + homeFeedbacks.fileUrl
                  }
                  author={homeFeedbacks.fullName}
                  job={homeFeedbacks.companyName}
                  text={
                    i18n.language === "uz"
                      ? homeFeedbacks.description_uz
                      : i18n.language === "ru"
                      ? homeFeedbacks.description_ru
                      : homeFeedbacks.description_en
                  }
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
