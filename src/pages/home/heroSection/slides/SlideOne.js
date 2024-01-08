import React from "react";
import Slide from "../slide/slide";
export default function SlideOne() {
  
  return (
    <Slide
      bgColor= "#FFF6EF"
      img="https://firebasestorage.googleapis.com/v0/b/askale-10c98.appspot.com/o/hero-section-slides%2Fv1%2FSLIDE-ONE.png?alt=media"
      top={
        <>
          we are not carpenters,we are{" "}
          <span style={{ color: "#FE7965" }} className="">artists.</span>
        </>
      }
      middle={
        <span style={{lineHeight:'2em'}}>
          Crafts by{" "}
          <span
            className="fw-bold text-black p-1"
            style={{ border: "2px solid black" }}
          >
            ASKALÉ
          </span>
        </span>
      }
      btn={
        <>
          <span
            className="fs-5 fw-medium text-white text-capitalize"
          >
            explore more
          </span>
        </>
      }
    />
  );
}
