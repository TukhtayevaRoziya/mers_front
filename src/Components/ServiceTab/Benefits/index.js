import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import benefit2 from "../../../assets/benefits/002-car-repair2.png";
import benefit3 from "../../../assets/benefits/003-recovery3.png";
import benefit1 from "../../../assets/benefits/001-computer1.png";
import benefit4 from "../../../assets/benefits/004-truck4.png";

import { instance } from "../../../API/api";
import Benefit from "./Benefit";

import style from './Benefits.module.css'

function Benefits() {
  const images = [benefit1, benefit2, benefit3, benefit4];
  const [homeStepCategories, setHomeStepCategories] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("homeStepCategories").then((res) => {
      setHomeStepCategories(res.data);
    });
  }, []);
  return (
    <div className={`container d-flex my-5 ${style.benefit__container}`} id="benefits">
      <div className={`row ${style.body}`}>
        {homeStepCategories &&
          homeStepCategories.length &&
          homeStepCategories.map((homeStepCategories, index) => (
            <Benefit
              className={`col`}
              title={
                i18n.language === "uz"
                  ? homeStepCategories.title_uz
                  : i18n.language === "ru"
                  ? homeStepCategories.title_ru
                  : homeStepCategories.title_en
              }
              key={homeStepCategories.id}
              description={
                i18n.language === "uz"
                  ? homeStepCategories.description_uz
                  : i18n.language === "ru"
                  ? homeStepCategories.description_ru
                  : homeStepCategories.description_en
              }
              img={images[index]}
              imgDesc={"Benefit_computer"}
            />
          ))}
      </div>
    </div>
  );
}

export default Benefits;
