import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function index({ title, img, date, desc, id }) {
  return (
    <>
      <div
        className={`col-12 col-sm-12 col-sm-12 col-md-5 col-lg-5 d-flex justify-content-center align-items-center ${styles.jumbotronPostsImage}`}
      >
        <Link to={`/news/${id}`} className={styles.link}>
          <img src={img} alt="Jumbotron post 1" />
        </Link>
      </div>
      <div
        className={`col-12 col-sm-12 col-sm-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center px-3 ${styles.jumbotronPostsAbout}`}
      >
        <Link to={`/news/${id}`} className={styles.link}>
          <p>
            <b>{title}</b>
          </p>
          <p className={styles.jumbotronPostsDate}>{date}</p>
          <p>{desc}</p>
        </Link>
      </div>
    </>
  );
}

export default index;
