import React from "react";
import classes from "./slide.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import useBreakpoint from "../../../../hooks/useBreakpoint";
export default function Slide(props) {
  const { lg, xl } = useBreakpoint();
  const desktop = lg || xl;
  return (
    <Container
      className={classes.SlideContainer}
      style={
        desktop
          ? { background: `${props.bgColor}` }
          : {
              backgroundImage: `linear-gradient(rgba(255, 246, 239, 1), rgba(255, 246, 239, 0.3)), url(${props.img})`,
            }
      }
    >
      <Row className="h-100">
        {desktop && (
          <Col
            lg={4}
            className={classes.SlideLeftPart}
            style={{ backgroundImage: `url(${props.img})` }}
          ></Col>
        )}
        <Col lg={8} className="p-5">
          <div className="h-100 d-flex flex-column  justify-content-around justify-content-lg-between align-items-center align-items-lg-start">
            <h1 className="text-capitalize fw-bold">{props.top}</h1>
            <h3 className="text-capitalize" style={{ color: "#FE7965" }}>
              {props.middle}
            </h3>
            <Button
              className="col-12 col-lg-6 p-4 border border-0"
              style={{ background: "#FE7965" }}
            >
              {props.btn}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
