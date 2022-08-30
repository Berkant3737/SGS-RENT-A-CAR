import React from "react";
import Navbar from "../Main Components/Navbartest/Navbar";
import OurWehicleBanner from "./OurWehicleFleetBanner/OurWehicleFleetBanner";
import Footer from "../Main Components/Footer/Footer";
import "./OurWehicleFleet.css";

function FleetContent() {
  return (
    <div>
      <Navbar />
      <OurWehicleBanner />
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          {/* Column One */}{" "}
          <div className="col-12 col-md-4 me-md-4 mb-4">
            <div class="card arac-card text-center">
              <a href="/arac1">
                {" "}
                <img
                  src="https://swissvans.com/wp-content/uploads/2019/10/Screenshot-2019-10-08-at-10.47.46-1024x625.png"
                  className="card-img-top w-100"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">MERCEDES VİTO</h5>
                <p className="card-text"></p>
                <a href="/mercedesvito" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
          {/* Column One */}
          {/* Column Two */}{" "}
          <div className="col-12 col-md-4 me-md-4 mb-4">
            <div class="card arac-card text-center">
              <a href="/arac2">
                {" "}
                <img
                  src="https://www.adanarentacar.com.tr/img/urun/buyuk/adana-vip-mercedes-vito-kiralama-dis.webp"
                  className="card-img-top w-100"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">MERCEDES ULTRA VİP VİTO</h5>
                <p className="card-text"></p>
                <a href="/mercedesultravipvito" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
          {/* Column Three */}
          <div className="col-12 col-md-4 me-md-4 mb-4">
            <div class="card arac-card text-center">
              <a href="/arac3">
                {" "}
                <img
                  src="https://content.presspage.com/uploads/2190/1920_mercedes-benzsprinter-9.jpg?10000"
                  className="card-img-top w-100"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">MERCEDES SPRİNTER</h5>
                <p className="card-text"></p>
                <a href="/mercedessprinter" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
          {/* Column Three */}
          {/* Column Four */}{" "}
          <div className="col-12 col-md-4 mb-4">
            <div class="card arac-card text-center">
              <a href="/arac4">
                {" "}
                <img
                  src="https://www.mercedes-benz.com.my/passengercars/the-brand/news-and-events/new-e-class-variants/full-article/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ6.12.20190307023853.jpeg"
                  className="card-img-top w-100"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">MERCEDES E CLASS</h5>
                <p className="card-text"></p>
                <a href="/mercedeseclass" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
          {/* Column Four */}
          {/* Column Five */}
          <div className="col-12 col-md-4 me-md-4 mb-4">
            <div class="card arac-card text-center">
              <a href="/arac5">
                {" "}
                <img
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/7994/1633596468711/front-left-side-47.jpg?tr=w-375"
                  className="card-img-top w-100"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">MERCEDES S CLASS</h5>
                <p className="card-text"></p>
                <a href="/mercedessclass" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
          {/* Column Five */}

          {/* Column Six */}
          <div className="col-12 col-md-4"></div>
          {/* Column Six */}
        </div>
      </div>
    </div>
  );
}

export default FleetContent;
