import React from "react";
import WehicleOne from "./WehicleOne";
import Navbar from "../../Main Components/Navbartest/Navbar";
import Footer from "../../Main Components/Footer/Footer";
function Wehicle() {
  return (
    <div>
      <Navbar />
      <İtemBanner/>
      <WehicleOne/>
      <Footer/>
    </div>
  );
}


const İtemBanner =()=> {
  return (
    <div>
        <div className="item-banner">
            <div className="container-fluid">
                <div className="row text-start">
                    <div className="col-12">
                       <h1>MERCEDES VİTO</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}





export default Wehicle;


