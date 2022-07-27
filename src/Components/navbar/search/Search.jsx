import React from "react";
import style from "./Search.module.css";

export const Search = () => {
  return (
      <div className={style.search_block}>
        <input type="search" placeholder="Search product" />
        <div className={style.icon}></div>
      </div>
  );
};
