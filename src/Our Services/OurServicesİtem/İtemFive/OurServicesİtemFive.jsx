import React from "react";
import Navbar from "../../../Main Components/Navbartest/Navbar";
import Footer from "../../../Main Components/Footer/Footer";
function OurServicesİtemFive() {
  return (
    <div>
      <Navbar/>
      <İtemBannerFive/>
      <div className="OurServices-İtem-Content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-12 text-center">
                <img
                  src="https://vipmercedesvitokiralama.com/trex/assets/img/hizmetler/3170220472.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-md-12 text-center">
                <hr />
                <div className="row d-flex justify-content-center">
                  <div className="col-9 mb-5">
                    <h1 className="pb-3">BOĞAZ TURLARI BİLGİLENDİRME</h1>

                    <p className="text-muted">
                      <strong>SGS RENT A CAR</strong> olarak sizlere sunduğumuz
                      mercedes vito, vip minibüs ve diğer marka seçenekleri ile
                      kiralama işlemlerinizde yanınızdayız. Daima kalite ve
                      uygun fiyatları ile hizmetinizde olan firmamız için en
                      önemli ilke memnuniyetinizi sağlamak, hem doğru hem
                      güvenilir kiralama hizmeti almanızdır.
                    </p>
                    <p className="text-muted">
                      Firmamız her zaman ihityacınıza göre sizi yönlendirmeyi ve
                      istediğiniz araçtan tam verim almanızı hedefler.
                      Firmamızda her bütçeye uygun özel dizayna sahip kiralık
                      mercedes vito, kiralık mercedes minibüs ve bir çok vip
                      dizayna sahip araçlarımızla 7/24 sizlerin tüm
                      ihtiyaçlarını karşılayacak profesyonel ekibimizle araç
                      kiralama konusunda hizmetinizdeyiz.
                    </p>
                    <p className="text-muted">
                      Kiralık mercedes vito fiyatları, diğer araç fiyatlarımız
                      yada ayrıntılı bilgi için bize{" "}
                      <strong>0555 865 66 19</strong> numaralı telefondan
                      ulaşabilirsiniz.
                    </p>
                  </div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}

const İtemBannerFive = () => {
  return (
    <div>
        <div className="item-banner">
            <div className="container-fluid">
                <div className="row text-start">
                    <div className="col-12">
                       <h1>BOĞAZ TURLARI</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default OurServicesİtemFive;
