import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import "./animateIcon.css";
import logo from "../../../assets/logo.png";

// import './animateIcon.css'
import footer from "./index.module.scss";

function index() {
  return (
    <div
      className={`container-fluid ${footer.footer__body}`}
      style={{ background: "#1E2833" }}
      id="footer"
    >
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-3">
            <img src={logo} alt="Logo" />
            <p className="my-3">
              Avtomobillarni ta'mirlash sohasida 15 yildan ortiq tajriabaga ega
              bo'lgan ustaxona.
            </p>
          </div>
          <div
            className={`col-12 col-md-2 offset-md-1 ${footer.footer__block}`}
          >
            <h5 className="mb-4">
              <b>Tezkor havola</b>
            </h5>
            <p>
              <a href="/" className={footer.alink}>
                {/* Ish vaqti */}
                Bosh sahifa
              </a>
            </p>
            <p>
              <a href="/about" className={footer.alink}>
                {/* Joylashuv */}
                Biz haqimizda
              </a>
            </p>
            <p>
              <a href="/contact" className={footer.alink}>
                Aloqa
              </a>
            </p>
          </div>
          <div
            className={`col-12 col-md-2 offset-md-1 ${footer.footer__block}`}
          >
            <h5 className="mb-4">
              <b>Bo'limlar</b>
            </h5>
            <p>
              <a href="/news" className={footer.alink}>
                {/* Feedbeklar */}
                Yangiliklar
              </a>
            </p>
            <p>
              <a href="/services" className={footer.alink}>
                {/* Foydali ma'lumotlar */}
                Xizmatlar
              </a>
            </p>
          </div>
          <div className={`col-12 col-md-3 ${footer.footer__block}`}>
            <h5 className="mb-4">
              <b>Bog'lanish</b>
            </h5>
            <p>Toshkent shahar, Uchtepa tumani, Nabi G'aniyev ko'chasi</p>
            <p>
              <a className={footer.alink} href="tel: +998 97 888-22-20 ">
                {" "}
                +998 97 888-22-20{" "}
              </a>{" "}
            </p>
            <p>
              <a className={footer.alink} href="tel:  +998 99 888-22-20">
                {" "}
                +998 99 888-22-20{" "}
              </a>
            </p>
            <p>
              <a href="/" className={footer.alink}>
                herculesservice@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div
          className={`row d-flex justify-content-between  pt-5 ${footer.footer_endText}`}
        >
          <div
            className={`col-3 d-flex justify-content-between ${footer.footer__smallBlock}`}
          >
            <p>
              <a href="/" className={footer.alink}>
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href="/" className={footer.alink}>
                Privacy Policy
              </a>
            </p>
          </div>
          <div
            className={`col-3 d-flex justify-content-end align-items-center ${footer.footer__smallBlock}`}
          >
            <a href="/" className="social_link">
              <FontAwesomeIcon id="youtube" icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a href="https://instagram.com/hercules.uz" className="social_link">
              <FontAwesomeIcon
                id="instagram"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
            <a href="/" className="social_link">
              <FontAwesomeIcon
                id="telegram"
                icon={faTelegramPlane}
              ></FontAwesomeIcon>
            </a>
            <a href="/" className="social_link">
              <FontAwesomeIcon
                id="facebook"
                icon={faFacebookF}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
