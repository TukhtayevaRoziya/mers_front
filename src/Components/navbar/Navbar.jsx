import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";
import { Select } from "./select/Select";
import { Switch } from "./switch/Switch";
import { useTranslation } from "react-i18next";
import style from "./Navbar.module.css";
import OutsideClick from "./HandleOutsideClick";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);

  if (boxOutsideClick) {
    inputRef.current.checked = false;
  }

  const clickHandler = () => {
    inputRef.current.checked = false;
  };

  return (
    <nav
      className={style.navbar}
      style={pathname.includes("account") ? { background: "#333" } : null}
      ref={boxRef}
    >
      <div className={style.navbar_container + " " + style.container}>
        <input type="checkbox" ref={inputRef} />
        <div className={style.hamburger_lines}>
          <span className={style.line + " " + style.line1}></span>
          <span className={style.line + " " + style.line2}></span>
          <span className={style.line + " " + style.line3}></span>
        </div>
        <div className={style.navbar__select}>
          <Select />
        </div>
        <ul className={style.menu_items}>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              to="/"
              onClick={clickHandler}
            >
              {t("navbar.navlink1")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              to="/about"
              onClick={clickHandler}
            >
              {t("navbar.navlink2")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              to="/services"
              onClick={clickHandler}
            >
              {t("navbar.navlink3")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              to="/news"
              onClick={clickHandler}
            >
              {t("navbar.navlink4")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              to="/contact"
              onClick={clickHandler}
            >
              {t("navbar.navlink5")}
            </NavLink>
          </li>
          <li className={style.navbar__selectLG}>
            <Select />
          </li>
          <li>
            <Switch />
          </li>
        </ul>
        <NavLink to={"/"} className={style.navbar__logo_body}>
          <img src={logo} alt="" className={style.logo} />
        </NavLink>
      </div>
    </nav>
  );
};
