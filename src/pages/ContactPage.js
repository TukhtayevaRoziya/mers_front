import React from "react";

import ContactHeader from "../Components/ServiceTab/Contact/ContactHeader";
import Contact from "../Components/ServiceTab/Contact";
import Footer from "../Components/ServiceTab/Footer";
import Map from "../Components/ServiceTab/Map/Map";

import style from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <div className={style.contactPage__body}>
        <Contact />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
