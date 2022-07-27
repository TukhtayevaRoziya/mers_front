import SimpleMainBlog from "../SimpleMainBlog";
import styles from "./index.module.scss";
// import post1 from "../../../../assets/news/posts/post1.png";
// import post2 from "../../../../assets/news/posts/post2.png";
// import post3 from "../../../../assets/news/posts/post3.png";
// import post4 from "../../../../assets/news/posts/post4.png";
// import post5 from "../../../../assets/news/posts/post5.png";
// import post6 from "../../../../assets/news/posts/post6.png";
import { instance } from "../../../../API/api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Index() {
  const [newsMains, setNewsMains] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    instance.get("newsMains").then((res) => {
      setNewsMains(res.data);
    });
  }, []);
  return (
    <>
      <div className="row">
        {newsMains &&
          newsMains.length &&
          newsMains.map((newsMain) => (
            <div className="col-md-4" key={newsMain.id}>
              <Link to="blog" className={styles.link}>
                <SimpleMainBlog
                  title={
                    i18n.language === "uz"
                      ? newsMain.title_uz
                      : i18n.language === "ru"
                      ? newsMain.title_ru
                      : newsMain.title_en
                  }
                  date={newsMain.inserted}
                  img={newsMain.fileUrl}
                  text={
                    i18n.language === "uz"
                      ? newsMain.title_uz
                      : i18n.language === "ru"
                      ? newsMain.title_ru
                      : newsMain.title_en
                  }
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Index;
