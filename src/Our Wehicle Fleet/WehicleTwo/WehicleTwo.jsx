import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./WehicleTwo.css"
import photo2 from "./img/Fotoğraf2.jpg";
import photo3 from "./img/Fotoğraf3.jpg";
import photo4 from "./img/Fotoğraf4.jpg";
import photo5 from "./img/Fotoğraf5.jpg";



const images = [
  photo2,
  photo3,
  photo4,
  photo5,
  
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="wehicle pt-4 mb-5 fs-5">
          <div className="col-12 text-center">
            <p className="fs-5">Resmi büyütmek için üzerine tıklayınız</p>
            <img
              src={photo2}
             className="wehicle-photo"
             style={{height:"650px"}}
              onClick={() => this.setState({ isOpen: true })}
            />
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
