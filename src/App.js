import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";

import ScrollToTop from "./Components/ServiceTab/ScrolltoTop/ScrollerToTop";
import { Preloader } from "./Components/preloader/Preloader";
import { Navbar } from "./Components/navbar/Navbar";
import BackToTop from "./BackToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "aos/dist/aos.css";

import "./App.css";
import "swiper/css";
import QuickIcons from "./Components/ServiceTab/QuickIcons/QuickIcons";

const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const InnerService = lazy(() => import("./pages/InnerService"));
const Services = lazy(() => import("./pages/ServicesPage"));
const News = lazy(() => import("./pages/NewsPage"));
const Blog = lazy(() => import("./pages/BlogPage"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <QuickIcons />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<InnerService />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<Blog />} />
          </Routes>
        </Suspense>
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
