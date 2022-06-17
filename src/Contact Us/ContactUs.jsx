import React from "react";
import Navbar from "../Main Components/Navbartest/Navbar";
import Footer from "../Main Components/Footer/Footer";
import "./ContactUs.css";
import ContactUsForm from "./ContactUsForm/ContactUsForm";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9234467091496!2d29.01173331516557!3d41.07066597929454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab644f8bc3c39%3A0xe39b842b8ff98c27!2sYegane%20Apt!5e0!3m2!1str!2str!4v1655336318907!5m2!1str!2str"
        className="contactus-iframe"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactUsForm/>
      <Footer />
    </div>
  );
}

const İtemBanner = () => {
  return (
    <div>
      <div className="item-banner">
        <div className="container-fluid">
          <div className="row text-start">
            <div className="col-12">
              <h1>BİZE ULAŞIN</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
