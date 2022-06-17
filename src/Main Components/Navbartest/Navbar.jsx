import React from "react";
import "./navbar.css";
 function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            SGS RENT A CAR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Anasayfa
                </a>
                <div className="line"></div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/hizmetlerimiz">
                  Hizmetlerimiz
                </a>
                <div className="line"></div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/hakkimizda">
                  Hakkımızda
                </a>
                <div className="line"></div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/aracfilomuz">
                  Araç Filomuz
                </a>
                <div className="line"></div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bizeulasin">
                  Bize Ulasın
                </a>
                <div className="line"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
