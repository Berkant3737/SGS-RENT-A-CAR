import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            {/* Column one */}
            <div className="col-12 col-md-4">
              {/* Footer Title */}
              <div className="footer-title text-center">
                <h4>SGS RENT A CAR</h4>
              </div>
              {/* Footer Title */}
              {/* Footer Text */}
              <div className="footer-text text-center">
                <p>
                  SGS RENT A CAR Profesyonel çalışanları ile İstanbul'da saygın
                  müşterilerine Şoförlü VIP Vito kiralama ve Şoförlü lüks
                  Mercedes araç kiralama hizmeti sunmaktadır.
                </p>
              </div>
              {/* Footer Text */}
            </div>
            {/* Column one */}

            {/* Column two */}
            <div className="col-12 col-md-4">
              {/* Footer Title */}
              <div className="footer-menu-title text-center">
                <h4>MENÜ</h4>
              </div>
              {/* Footer Title */}
              {/* Footer Text */}
              <div className="footer-menu-text text-center">
                <ul>
                  <li>
                    <a href="/">Anasayfa</a>
                  </li>
                  <li>
                    <a href="/hizmetlerimiz">Hizmetlerimiz</a>
                  </li>
                  <li>
                    <a href="/hakkimizda">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="/aracfılomuz">Araç Filomuz</a>
                  </li>
                  <li>
                    <a href="/bızeulasın">Bize Ulasın</a>
                  </li>
                </ul>
              </div>
              {/* Footer Text */}
            </div>
            {/* Column two */}

            {/* Column three */}
            <div className="col-12 col-md-4">
              {/* Footer Title */}
              <div className="footer-info-title text-center">
                <h4>İLETİŞİM BİLGİLERİMİZ</h4>
              </div>
              {/* Footer Title */}
              {/* Footer Text */}
              <div className="footer-text text-center">
                <p>
                  <div className="footer-icons d-inline-block p-3">
                    <BsFillTelephoneFill></BsFillTelephoneFill>
                  </div>
                  0555 865 66 19
                </p>
                <p>
                  <div className="footer-icons d-inline-block p-3">
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  info@sgsrentacar.com
                </p>
                <p>
                  <div className="footer-icons d-inline-block p-3">
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  selimoz@sgsrentacar.com
                </p>
              </div>
              {/* Footer Text */}
            </div>
            {/* Column three */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
