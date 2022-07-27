import { useEffect, useState } from "react";
import AOS from "aos";
import { instance } from "../../../API/api";
import "aos/dist/aos.css";
import browse1 from "../../../assets/browse/1.png";
import Button from "../Button";

import browse from "./index.module.scss";
import "./forbootstrap.scss";
import "animate.css";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Browse() {
  const [value, setValue] = useState(2);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [homeSliders, setHomeSlidersAPI] = useState();
  // const {i18n} =  useTranslation();
  useEffect(() => {
    instance.get("homeTools").then((res) => {
      setHomeSlidersAPI(res.data);
    });
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
        style={{
          background: "transparent",
          flexDirection: "row-reverse",
          justifyContent: "space-around",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <h1
            style={{
              width: "100%",
              fontWeight: "bolder",
              lineHeight: 1.2,
              marginTop: "24px",
              paddingLeft: "12px",
            }}
          >
            Biz siz uchun qoshimcha ravishda online do'konimizni tavsiya etamiz
            !
          </h1>
          <p style={{ marginBottom: "2rem", paddingLeft: "12px" }}>
            {(homeSliders && homeSliders[0] && homeSliders[0].description_uz) ||
              "Hozirgi kunda insonlar uchun qulaylik tug'dirish maqsadida online do'konlar tizimi yo'lga qo'yilgan. Siz ham mashinangiz uchun kerakli bo'lgan barcha narsani bizning online do'kondan xarid qilishingiz mumkin"}
          </p>
          <Tab
            label={
              (homeSliders && homeSliders[1] && homeSliders[1].title_uz) ||
              "Avtomashinalar"
            }
            {...a11yProps(0)}
            className={"tabTeg"}
          />
          <Tab
            label={
              (homeSliders && homeSliders[2] && homeSliders[2].title_uz) ||
              "Ehtiyot qismlari"
            }
            {...a11yProps(1)}
            className={"tabTeg"}
          />
          <Tab
            label={
              (homeSliders && homeSliders[3] && homeSliders[3].title_uz) ||
              "Elektronika"
            }
            {...a11yProps(2)}
            className={"tabTeg"}
          />
          <Tab
            label={
              (homeSliders && homeSliders[4] && homeSliders[4].title_uz) ||
              "O'rindiq g'iloflari"
            }
            {...a11yProps(3)}
            className={"tabTeg"}
          />
          <Tab
            label={
              (homeSliders && homeSliders[5] && homeSliders[5].title_uz) ||
              "Mashina moyi"
            }
            {...a11yProps(4)}
            className={"tabTeg"}
          />
          <Tab
            label={
              (homeSliders && homeSliders[6] && homeSliders[6].title_uz) ||
              "Maxsus qurilmalar"
            }
            id="tabTeg"
            {...a11yProps(5)}
            className={"tabTeg"}
          />
          <div className="my-2"></div>
          <Button name={"Do'konga o'tish"} link={""} />
        </Tabs>

        <TabPanel value={value} index={2}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[1] &&
                homeSliders[1].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[0].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[2] &&
                homeSliders[2].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[1].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[3] &&
                homeSliders[3].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[2].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[4] &&
                homeSliders[4].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[3].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[5] &&
                homeSliders[5].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[4].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <div
            className="tab-pane fade imageWrapper show active"
            id="v-pills-autosystems"
            role="tabpanel"
          >
            <p
              className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
            >
              {(homeSliders &&
                homeSliders[6] &&
                homeSliders[6].description_uz) ||
                "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
            </p>
            <img
              className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
              src={
                !homeSliders
                  ? browse1
                  : process.env.REACT_APP_PHOTO_URL + homeSliders[4].fileUrl
              }
              alt=""
            />
          </div>
        </TabPanel>
      </Box>
    </>
    // <div className="container-fluid my-4">
    //   <div className="row" data-aos="zoom-in">
    //     {homeSliders && homeSliders.length && (
    //       <>
    //         <div className="p-0 col-12 col-md-12 col-lg-7 col-xl-7 d-flex align-items-center justify-content-center">
    //           <div className="tab-content" id="v-pills-tabContent">
    //             <div
    //               className="tab-pane fade imageWrapper show active"
    //               id="v-pills-autosystems"
    //               role="tabpanel"
    //             >
    //               <p
    //                 className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
    //               >
    //                 {homeSliders[1].description_uz ||
    //                   "Avtomshinalarning xar hil turdagi ko'rinshlari bor !"}
    //               </p>
    //               <img
    //                 className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
    //                 src={
    //                   !homeSliders
    //                     ? browse1
    //                     : process.env.REACT_APP_PHOTO_URL +
    //                       homeSliders[0].fileUrl
    //                 }
    //                 alt=""
    //               />
    //             </div>
    //             <div
    //               className="tab-pane fade imageWrapper"
    //               id="v-pills-customer"
    //               role="tabpanel"
    //             >
    //               <p
    //                 className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //               >
    //                 {homeSliders[1].description_uz ||
    //                   "Avto ehtiyot qismlar Germaniya va Dubaydan olib kelinadi!"}
    //               </p>
    //               <img
    //                 className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
    //                 src={
    //                   !homeSliders
    //                     ? browse2
    //                     : process.env.REACT_APP_PHOTO_URL +
    //                       homeSliders[1].fileUrl
    //                 }
    //                 alt=""
    //               />
    //             </div>
    //             <div
    //               className="tab-pane fade imageWrapper"
    //               id="v-pills-computer"
    //               role="tabpanel"
    //             >
    //               <p
    //                 className={`animate__animated animate__slideInDown animate__fast p-4 ${browse.imageText}`}
    //               >
    //                 {homeSliders[2].description_uz ||
    //                   " Mashinani tyuning qilish uchun kerakli elektron jihozlar ham do'konimizda mavjud !"}
    //               </p>
    //               <img
    //                 className={`animate__animated animate__fadeInLeftBig animate__fast  ${browse.image}`}
    //                 src={
    //                   !homeSliders
    //                     ? browse3
    //                     : process.env.REACT_APP_PHOTO_URL +
    //                       homeSliders[2].fileUrl
    //                 }
    //                 alt=""
    //               />
    //             </div>
    //             <div
    //               className="tab-pane fade imageWrapper"
    //               id="v-pills-sales"
    //               role="tabpanel"
    //             >
    //               <p
    //                 className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //               >
    //                 {homeSliders[3].description_uz ||
    //                   " Juda chiroyli va hashamatli ko'rinishga ega avtomobil g'iloflari"}
    //               </p>
    //               <img
    //                 className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
    //                 src={
    //                   !homeSliders
    //                     ? browse4
    //                     : process.env.REACT_APP_PHOTO_URL +
    //                       homeSliders[3].fileUrl
    //                 }
    //                 alt=""
    //               />
    //             </div>
    //             <div
    //               className="tab-pane fade imageWrapper"
    //               id="v-pills-operations"
    //               role="tabpanel"
    //             >
    //               <p
    //                 className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //               >
    //                 {homeSliders[4].description_uz ||
    //                   "Mercedes-Benz uchun maxsus mator  moylari"}
    //               </p>
    //               <img
    //                 className={`animate__animated animate__fadeInLeftBig animate__faster ${browse.image}`}
    //                 src={
    //                   !homeSliders
    //                     ? browse5
    //                     : process.env.REACT_APP_PHOTO_URL +
    //                       homeSliders[4].fileUrl
    //                 }
    //                 alt=""
    //               />
    //             </div>
    //             {homeSliders.length > 5 && (
    //               <div
    //                 className="tab-pane fade imageWrapper"
    //                 id="v-pills-hr"
    //                 role="tabpanel"
    //               >
    //                 <p
    //                   className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //                 >
    //                   {homeSliders[5].description_uz ||
    //                     "Mator uchun kerakli bo'lgan qo'shimcha ehtiyot qismlari"}
    //                 </p>
    //                 <img
    //                   className={`animate__animated animate__fadeInLeftBig animate__fast  ${browse.image}`}
    //                   src={
    //                     !homeSliders
    //                       ? browse6
    //                       : process.env.REACT_APP_PHOTO_URL +
    //                         homeSliders[5].fileUrl
    //                   }
    //                   alt=""
    //                 />
    //               </div>
    //             )}
    //             {homeSliders.length > 5 && (
    //               <div
    //                 className="tab-pane fade imageWrapper"
    //                 id="v-pills-hr"
    //                 role="tabpanel"
    //               >
    //                 <p
    //                   className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //                 >
    //                   {homeSliders[5].description_uz ||
    //                     "Mator uchun kerakli bo'lgan qo'shimcha ehtiyot qismlari"}
    //                 </p>
    //                 <img
    //                   className={`animate__animated animate__fadeInLeftBig animate__fast  ${browse.image}`}
    //                   src={
    //                     !homeSliders
    //                       ? browse6
    //                       : process.env.REACT_APP_PHOTO_URL +
    //                         homeSliders[5].fileUrl
    //                   }
    //                   alt=""
    //                 />
    //               </div>
    //             )}
    //             {homeSliders.length > 6 && (
    //               <div
    //                 className="tab-pane fade imageWrapper"
    //                 id="v-pills-hr"
    //                 role="tabpanel"
    //               >
    //                 <p
    //                   className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //                 >
    //                   {homeSliders[6].description_uz ||
    //                     "Mator uchun kerakli bo'lgan qo'shimcha ehtiyot qismlari"}
    //                 </p>
    //                 <img
    //                   className={`animate__animated animate__fadeInLeftBig animate__fast  ${browse.image}`}
    //                   src={
    //                     !homeSliders
    //                       ? browse6
    //                       : process.env.REACT_APP_PHOTO_URL +
    //                         homeSliders[6].fileUrl
    //                   }
    //                   alt=""
    //                 />
    //               </div>
    //             )}
    //             {homeSliders.length > 7 && (
    //               <div
    //                 className="tab-pane fade imageWrapper"
    //                 id="v-pills-hr"
    //                 role="tabpanel"
    //               >
    //                 <p
    //                   className={`animate__animated animate__slideInDown animate__fast p-4  ${browse.imageText}`}
    //                 >
    //                   {homeSliders[7].description_uz ||
    //                     "Mator uchun kerakli bo'lgan qo'shimcha ehtiyot qismlari"}
    //                 </p>
    //                 <img
    //                   className={`animate__animated animate__fadeInLeftBig animate__fast  ${browse.image}`}
    //                   src={
    //                     !homeSliders
    //                       ? browse6
    //                       : process.env.REACT_APP_PHOTO_URL +
    //                         homeSliders[7].fileUrl
    //                   }
    //                   alt=""
    //                 />
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //         <div className="col-12 col-md-12 col-lg-5 col-xl-5 my-4">
    //           <div className="container">
    //             <div
    //               className={`d-flex flex-column align-items-start ${browse.browseText}`}
    //             >
    //               {/* <div className='d-none d-lg-block'> */}
    //               <div className="">
    //                 <h2 className="mb-3">
    //                   <b>
    //                     {homeSliders[0].title_uz ||
    //                       "Biz siz uchun qoshimcha ravishda online do'konimizni tavsiya etamiz !"}
    //                   </b>
    //                 </h2>
    //                 <p>
    //                   {homeSliders[0].description_uz ||
    //                     "Hozirgi kunda insonlar uchun qulaylik tug'dirish maqsadida online do'konlar tizimi yo'lga qo'yilgan. Siz ham mashinangiz uchun kerakli bo'lgan barcha narsani bizning online do'kondan xarid qilishingiz mumkin"}
    //                 </p>
    //               </div>
    //               <div
    //                 className={`nav flex-column nav-pills me-3 ${browse.activeLink}`}
    //                 id="v-pills-tab"
    //                 role="tablist"
    //                 aria-orientation="vertical"
    //               >
    //                 <h5
    //                   datatab="autosystem"
    //                   className={"browse-link active"}
    //                   id="v-pills-autosystems-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-autosystems"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {homeSliders[1].title_uz || "Avtomashinalar"}
    //                 </h5>
    //                 <h5
    //                   datatab="customerTab"
    //                   className={"browse-link"}
    //                   id="v-pills-customer-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-customer"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {homeSliders[2].title_uz || "Ehtiyot qismlari"}
    //                 </h5>
    //                 <h5
    //                   datatab="computerTab"
    //                   className={"browse-link"}
    //                   id="v-pills-computer-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-computer"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {homeSliders[3].title_uz || "Elektronika"}
    //                 </h5>
    //                 <h5
    //                   datatab="salesTab"
    //                   className={"browse-link"}
    //                   id="v-pills-sales-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-sales"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {homeSliders[4].title_uz || "O'rindiq g'iloflari"}
    //                 </h5>
    //                 <h5
    //                   datatab="operationsTab"
    //                   className={"browse-link"}
    //                   id="v-pills-operations-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-operations"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {/* {(homeSliders &&
    //                     homeSliders.length &&
    //                     homeSliders[5].title_uz) ||
    //                     "Mashina moyi"} */}
    //                   {homeSliders[5].title_uz || "Mashina moyi"}
    //                 </h5>
    //                 {/* <h5
    //                   datatab="hrTab"
    //                   className={"browse-link"}
    //                   id="v-pills-hr-tab"
    //                   data-bs-toggle="pill"
    //                   data-bs-target="#v-pills-hr"
    //                   type="button"
    //                   role="tab"
    //                 >
    //                   {homeSliders[6].title_uz || "Mashina moyi"}
    //                 </h5> */}
    //               </div>
    //               <div className="my-2"></div>
    //               <Button name={"Do'konga o'tish"} link={""} />
    //             </div>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
}

export default Browse;
