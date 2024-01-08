import Carousel from "react-bootstrap/Carousel";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";

function HeroSection() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <SlideOne />
      </Carousel.Item>
      <Carousel.Item>
        <SlideTwo />
      </Carousel.Item>
      <Carousel.Item>
        <SlideThree />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
