// import Button from '../Button'
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Category() {
  const { i18n } = useTranslation();
  const [serviceRepairs, setServiceRepairs] = useState();
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    instance.get(`serviceRepairs/${id}`).then((res) => {
      setServiceRepairs(res.data);
    });
  }, [id]);

  return (
    <>
      <div className={`container my-4 py-3`}>
        {serviceRepairs && (
          <div className="row" key={serviceRepairs.id}>
            <h2 className="pt-5 pb-4">
              <b>
                {i18n.language === "uz"
                  ? serviceRepairs.title_uz
                  : i18n.language === "ru"
                  ? serviceRepairs.title_ru
                  : serviceRepairs.title_en}
              </b>
            </h2>
            <p>
              {i18n.language === "uz"
                ? serviceRepairs.description_uz
                : i18n.language === "ru"
                ? serviceRepairs.description_ru
                : serviceRepairs.description_en}
            </p>
            <img src={serviceRepairs.fileUrl} alt="Wallpaper" />
          </div>
        )}
      </div>
      <div className="container-fluid pt-4">
        <div className="row"></div>
      </div>
    </>
  );
}

export default Category;
