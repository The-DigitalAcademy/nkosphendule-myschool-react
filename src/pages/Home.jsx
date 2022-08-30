


import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";

import Testimonals from "../components/Testimonal/Testimonals";




const Home = () => {
  return (
  <Fragment>
    <Header/>
    <HeroSection />
    <AboutUs/>
    <ChooseUs/>
    <FreeCourse/>
    <Testimonals/>
  </Fragment>
  );
};

export default Home;

