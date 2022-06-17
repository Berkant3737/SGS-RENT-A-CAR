import React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./Home page/HomePage";
import Aboutme from "./About Us/AboutmeText/Aboutme";
import OurServices from "./Our Services/OurServices";
import OurServicesİtemOne from "./Our Services/OurServicesİtem/İtemOne/OurServicesİtemOne";
import OurServicesİtemTwo from "./Our Services/OurServicesİtem/İtemTwo/OurServicesİtemTwo"
import OurServicesİtemThree from "./Our Services/OurServicesİtem/İtemThree/OurServicesİtemThree";
import OurServicesİtemFour from "./Our Services/OurServicesİtem/itemFour/OurServicesİtemFour";
import OurServicesİtemFive from "./Our Services/OurServicesİtem/İtemFive/OurServicesİtemFive";
import OurServicesİtemSix from "./Our Services/OurServicesİtem/İtemSix/OurServicesİtemSix";
import OurWehicleFleet from "./Our Wehicle Fleet/OurWehicleFleet";
import WehicleOne from "./Our Wehicle Fleet/WehicleOne/Wehicle";
import WehicleTwo from "./Our Wehicle Fleet/WehicleTwo/Wehicle";
import WehicleThree from "./Our Wehicle Fleet/WehicleThree/Wehicle";
import WehicleFour from "./Our Wehicle Fleet/WehicleFour/Wehicle";
import WehicleFive from "./Our Wehicle Fleet/WehicleFive/Wehicle";
import ContactUs from "./Contact Us/ContactUs";
function App() {
  return (
    <div>
      {/* HOME PAGE */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* HOME PAGE */}

      {/* ABOUT ME */}
      <Routes>
        <Route path="/hakkimizda" element={<Aboutme />} />
      </Routes>
      {/* ABOUT ME */}

      {/* OUR SERVİCES */}
      <Routes>
        <Route path="/hizmetlerimiz" element={<OurServices />} />
      </Routes>

      <Routes>
        <Route path="/detay1" element={<OurServicesİtemOne />} />
      </Routes>

      <Routes>
        <Route path="/detay2" element={<OurServicesİtemTwo />} />
      </Routes>

      <Routes>
        <Route path="/detay3" element={<OurServicesİtemThree/>} />
      </Routes>

      <Routes>
        <Route path="/detay4" element={<OurServicesİtemFour/>} />
      </Routes>

      <Routes>
        <Route path="/detay5" element={<OurServicesİtemFive/>} />
      </Routes>

      <Routes>
        <Route path="/detay6" element={<OurServicesİtemSix/>} />
      </Routes>
      {/* OUR SERVİCES */}

      {/* OUR WEHİCLE FLEET */}
      <Routes>
        <Route path="/aracfilomuz" element={<OurWehicleFleet/>} />
      </Routes>

      <Routes>
        <Route path="/mercedesvito" element={<WehicleOne/>} />
      </Routes>

      <Routes>
        <Route path="/mercedesultravipvito" element={<WehicleTwo/>} />
      </Routes>

      <Routes>
        <Route path="/mercedessprinter" element={<WehicleThree/>} />
      </Routes>

      <Routes>
        <Route path="/mercedeseclass" element={<WehicleFour/>} />
      </Routes>

      <Routes>
        <Route path="/mercedessclass" element={<WehicleFive/>} />
      </Routes>
      {/* OUR WEHİCLE FLEET */}

      {/* CONTACT US */}
      <Routes>
        <Route path="/bizeulasin" element={<ContactUs/>} />
      </Routes>
      {/* CONTACT US */}
    </div>
  );
}

export default App;
