import React from "react";
import Category from "../Components/ServiceTab/Category";
import Footer from "../Components/ServiceTab/Footer";
import HeadService from "../Components/ServiceTab/ServicesPage/HeadService";

function innerService() {
  return (
    <div>
      <HeadService />
      <Category />
      <Footer />
    </div>
  );
}

export default innerService;
