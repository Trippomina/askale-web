import React from "react";
import Slide from "../slide/slide";
export default function SlideTwo() {
  return (
    <Slide
    bgColor= "#FFF6EF"
      to=""
      img="https://firebasestorage.googleapis.com/v0/b/askale-10c98.appspot.com/o/hero-section-slides%2Fv1%2FSLIDE-TWO.png?alt=media"
      top={
        <>
          New{" "}
          <span
            style={{ fontFamily: "Pacifico, sans-serif", color: "#FE7965" }}
          >
            Designs
          </span>
          , 
          <br></br>
          new
          <span
            style={{ fontFamily: "Pacifico, sans-serif", color: "#FE7965" }}
          >
            {" "}
            Stories.
          </span>
        </>
      }
      middle={
        <div className="border-start border-3 border-black p-3 text-black">
          Take a quick look at our new
          <span className="fw-bold"> DNA Shelves.</span>
        </div>
      }
      btn={
        <>
          <span className="fs-5 fw-medium text-white text-capitalize">
            go to shelves
          </span>
        </>
      }
    />
  );
}
