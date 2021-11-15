import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import logo2 from '../../../acsset/slide2.png'
import logo3 from '../../../acsset/slide3.png'
import logo4 from '../../../acsset/slide4.png'
import './slides.scss'
const Slide = () => {
    const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const style = {
    textAlign: "center",
    padding: "0px 0",
    fontSize: "30px"
  };

  const properties = {
    autoplay: true,
    indicators: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    }
  };

  return (
    <div>
      <div>
        <Fade {...properties}>
          <div style={{...style}}>
            <img className="img__slide" src={logo3} alt="" />
          </div>
          <div style={{...style}}>
          <img className="img__slide"  src={logo2} alt="" />
          </div>
          <div style={{...style}}>
          <img className="img__slide"  src={logo2} alt="" />
          </div>
          <div style={{...style}}>
          <img className="img__slide"  src={logo4} alt="" />
          </div>
        </Fade>
      </div>
      {/* <p style={{fontSize: "20px", textAlign: "center"}}>Transitioned from {previousIndex} to {nextIndex}</p> */}
    </div>
  );
};


export default Slide
