import React, { useEffect } from "react";
import difference from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "./for_btn.scss";
import { Link } from "react-router-dom";

function Difference() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
    });
  }, []);
  return (
    <div className={`container-fluid ${difference.background}`}>
      <div className="wrapper_difference">
        <div className="row">
          <div className={difference.parent} data-aos="fade-down">
            <h5 className="title_or">
              Mercedes-Benz mashinalari o'zgacha e'tibor va qarov talab qiladi.
              Unga mos xizmat korsatish esa hammaning qo'lidan kelmaydi
            </h5>
            <h1 className="as_a_title">
              Xizmatlarimiz haqida yanada ko'proq ma'lumot olmoqchimisiz ? Unday
              bo'lsa qani kettik !
            </h1>
            <button className="service_tab_btn">
              <Link to="/services">Xizmatlar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Difference;
