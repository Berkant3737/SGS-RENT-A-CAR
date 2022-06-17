import React from "react";
import Navbar from "../Main Components/Navbartest/Navbar";
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";
import MainText from "./MainText/MainText";
import OurServices from "../Our Services/OurServicesContent/OurServicesContent";
import Footer from "../Main Components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <MainText />
      <OurServices />
      <Footer />
    </div>
  );
}

export default HomePage;
