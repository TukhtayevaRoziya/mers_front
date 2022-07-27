import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faScrewdriverWrench,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./QuickIcons.scss";
function QuickIcons() {
  return (
    <div className="QuickIcons">
      <div className="wrapper">
        <div className="shop">
          <p className="for_shop">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{" "}
            <a href="dokonurl">Do'kon</a>
          </p>
        </div>
        <div className="services">
          <p className="for_services">
            <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
            <Link to="/services">Xizmatlar</Link>
          </p>
        </div>
        <div className="socials">
          <p className="for_socails">
            <FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon>
            <a href="dbwa">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a href="awdaw">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="awdwa">
              <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
            </a>
            <a href="awda">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickIcons;
