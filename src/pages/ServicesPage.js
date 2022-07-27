import React from "react";

import HeadService from "../Components/ServiceTab/ServicesPage/HeadService";
import MainPart from "../Components/ServiceTab/ServicesPage/MainPart";
import Footer from "../Components/ServiceTab/Footer";
import Repair from "../Components/ServiceTab/ServicesPage/Repair";

function ServicesPage() {
  return (
    <div>
      <HeadService />
      <Repair />
      <MainPart />
      <Footer />
    </div>
  );
}

export default ServicesPage;
