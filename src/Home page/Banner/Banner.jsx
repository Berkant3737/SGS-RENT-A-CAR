import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div className="banner">
        <img src="https://i.hizliresim.com/i869wli.jpg" alt="" />
        <div className="banner-text text-center wh-100 justify-content-center">
          <h1 className="text-center">İSTANBUL ŞOFÖRLÜ MERCEDES VİTO KİRALAMA</h1>
          <p>
          İstanbul da araç kiralam hizmeti vererek müşterilerimizin <br /> konforlu
            ve güvenli bir şekilde seyahat etmesini sağlıyoruz
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
