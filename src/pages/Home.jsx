import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";

const Home = () => {
  return (
  <Fragment>
    <Header/>
    <HeroSection />
    <AboutUs/>
    <ChooseUs/>
  </Fragment>
  );
};

export default Home;

