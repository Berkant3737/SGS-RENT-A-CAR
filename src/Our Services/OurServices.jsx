import React from "react";
import Navbar from "../Main Components/Navbartest/Navbar";
import OurServicesBanner from "./OurServicesBanner/OurServicesBanner";
import OurServicesContent from "./OurServicesContent/OurServicesContent";
import Footer from "../Main Components/Footer/Footer";

function OurServices() {
  return (
    <div>
      <Navbar />
      <OurServicesBanner />
      <OurServicesContent />
      <Footer/>
    </div>
  );
}

export default OurServices;
