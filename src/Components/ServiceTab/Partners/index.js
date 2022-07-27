import partners from "./index.module.scss";
import Title from "../Title";
import { instance } from "../../../API/api";
import AOS from "aos";
import { useState, useEffect } from "react";
import "./partners.scss";
import "./index.module.scss";

function Partners() {
  const [homePartners, setHomePartners] = useState();
  useEffect(() => {
    instance.get("homePartners").then((res) => {
      setHomePartners(res.data);
    });
    AOS.init();
  }, []);
  return (
    <div className={`mt-5 ${partners.parent}`} data-aos="fade-down">
      <Title titleName={"Bizning hamkorlarimiz !"} className="down_line" />
      <div className="container mt-4">
        <div className="row d-flex wrapper_partners">
          {homePartners &&
            homePartners.length &&
            homePartners.map((homePartners) => (
              <div
                className="col img d-flex justify-content-center"
                key={homePartners.id}
              >
                <a href={homePartners.siteUrl}>
                  <img src={homePartners.fileUrl} alt={"Thisinanimage"} />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
