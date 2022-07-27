import { useState, useEffect } from "react";
import { instance } from "../../../API/api";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import contact from "./index.module.scss";
import "./ContactHeader.scss";
import img1 from "../../../assets/Message1.png";
import img2 from "../../../assets/Message2.png";
import img3 from "../../../assets/Message3.png";

function Contact() {
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Surname");
  const [email, setEmail] = useState("Email Address");
  const [number, setNumber] = useState("Phone Number");
  const images = [img1, img2, img3];
  const { i18n } = useTranslation();
  const [contactInfoes, setContactInfoes] = useState();
  const handleSubmit = () => {};
  useEffect(() => {
    instance.get("/contactInfoes").then((res) => {
      setContactInfoes(res.data);
    });
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container mt-5 pt-3" data-aos="zoom-in">
      <div className="row">
        <h1>Biz bilan bog'lanish</h1>
        <div className="col-12 col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center ">
          <div className="col footer_anime">
            <p className={`mt-4 ${contact.messageTitle}`}>
              <b>Xabar jo'natish</b>
            </p>
            <p>
              Taklif va shikoyatlaringizni bizga yuborish uchun quyidagi
              bo'limlarni to'ldiring!
            </p>
          </div>
          <form className="d-flex flex-column" action="/form?" method="post">
            <div className="col-12 my-3">
              <div className="row">
                <div className="col col-md-6 col-lg-5">
                  <input
                    className={`my-3 ${contact.inputs}`}
                    type="text"
                    name="name"
                    onClick={(e) => setName("")}
                    value={name}
                    onChange={(n) => setName(n.target.value)}
                    placeholder="Name"
                  />
                  <input
                    className={`my-3 ${contact.inputs}`}
                    type="text"
                    name="surname"
                    onClick={(e) => setSurname("")}
                    value={surname}
                    onChange={(s) => setSurname(s.target.value)}
                    placeholder="Surname"
                  />
                </div>
                <div className="col col-md-6 col-lg-5">
                  <input
                    className={`my-3 ${contact.inputs}`}
                    type="text"
                    name="email"
                    onClick={(e) => setEmail("")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <input
                    className={`my-3 ${contact.inputs}`}
                    type="text"
                    name="number"
                    onClick={(e) => setNumber("")}
                    value={number}
                    onChange={(num) => setNumber(num.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className={contact.messageLabel}>Message</p>
              <textarea
                className={contact.message}
                style={{ width: "100%", height: "50px" }}
                name="comment"
                form="userForm"
              ></textarea>
            </div>
            <div className="col-12 mt-4">
              <button onClick={handleSubmit} className={contact.button}>
                Jo'natish
              </button>
            </div>
          </form>
        </div>
        <div
          className={`col-12 col-lg-5 col-md-5 col-sm-5 d-flex flex-column justify-content-center align-items-center ps-4 ${contact.border}`}
        >
          {contactInfoes &&
            contactInfoes.length &&
            contactInfoes.map((contactInfoes, index) => (
              <div className="col contact_info_icons" key={contactInfoes.id}>
                <p>
                  {i18n.language === "uz"
                    ? contactInfoes.title_uz
                    : i18n.language === "ru"
                    ? contactInfoes.title_ru
                    : contactInfoes.title_en}
                </p>
                <div className={`d-flex align-items-center`}>
                  <div className={` ${contact.img}`}>
                    <img src={images[index]} alt="" />
                  </div>
                  <div className={`d-flex align-items-center ms-3`}>
                    {i18n.language === "uz"
                      ? contactInfoes.description_uz
                      : i18n.language === "ru"
                      ? contactInfoes.description_ru
                      : contactInfoes.description_en}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
