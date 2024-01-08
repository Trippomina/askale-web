import React from "react";
import Slide from "../slide/slide";
export default function SlideThree() {
  return (
    <Slide
    bgColor= "#FFF6EF"
      img="https://firebasestorage.googleapis.com/v0/b/askale-10c98.appspot.com/o/hero-section-slides%2Fv1%2FSLIDE-THREE.png?alt=media"
      top={<>25% OFF on your FIRST purchased item.</>}
      middle={  <div className="border-start border-3 border-black p-3 text-black">Elevate your home with timeless beauty.</div>}
      btn={
        <>
          {" "}
          <span className="fs-5 fw-medium text-white text-capitalize">
            start shopping
          </span>
        </>
      }
    />
  );
}
