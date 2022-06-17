import React from "react";
import Navbar from "../../Main Components/Navbartest/Navbar";
import Banner from "../../Home page/Banner/Banner";
import AboutmeText from "./AboutmeText";
import Footer from "../../Main Components/Footer/Footer.jsx"

function AboutMe() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutmeText/>
      <Footer/>

    </div>
  );
}

export default AboutMe;
