import React, { useState } from "react";
import i18n from "../../../i18n";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import navbar from "./index.module.scss";
import "./header.scss";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [scroll, setScroll] = useState("");
  const { t } = useTranslation();
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 600) {
      setScroll("");
    } else {
      setScroll("scroll23");
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className={`navbar navbar-expand-lg header   py-4  ` + scroll}>
          <div className={`container-fluid ${navbar.logoMenuBurgetOnSmall}`}>
            <Link to="/" className="navbar-brand ps-4">
              <img src={logo} alt="Logo" />
            </Link>
            <button
              className={`navbar-toggler ${navbar.menuBurger}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className={navbar.menuBurgerIcon}>
                <span>&#8212;</span>
                <span>&#8212;</span>
                <span>&#8212;</span>
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="me-auto"></div>
              <div className="">
                <ul
                  className={"navbar-nav me-auto pe-4 mb-lg-0 " + navbar.font}
                >
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${navbar.activeNavLink}`
                          : `nav-link ${navbar.nonActiveLink}`
                      }
                      aria-current="page"
                    >
                      {t("header.navlink1")}
                    </NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${navbar.activeNavLink}`
                          : `nav-link ${navbar.nonActiveLink}`
                      }
                    >
                      {t("header.navlink2")}
                    </NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${navbar.activeNavLink}`
                          : `nav-link ${navbar.nonActiveLink}`
                      }
                    >
                      {t("header.navlink3")}
                    </NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${navbar.activeNavLink}`
                          : `nav-link ${navbar.nonActiveLink}`
                      }
                    >
                      {t("header.navlink4")}
                    </NavLink>
                  </li>
                  <li className={`nav-item ${navbar.liLink}`}>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link ${navbar.activeNavLink}`
                          : `nav-link ${navbar.nonActiveLink}`
                      }
                    >
                      {t("header.navlink5")}
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item d-flex align-items-center mx-lg-1 ${navbar.languages}`}
                  >
                    <div className="dropdown">
                      <select name="lang" value={lang} onChange={handleChange}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
