import React from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import useBreakpoint from "../../hooks/useBreakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AskaleNavLink from "../askaleNavbar/askaleNavLink/askaleNavLink";
import { HashLink } from "react-router-hash-link";
import { faCaretSquareUp as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as instaIcon } from "@fortawesome/free-brands-svg-icons";
export default function AskaleFooter() {
  const { lg, xl } = useBreakpoint();
  const desktop = lg || xl;
  const instaLink = (
    <a
      href={"https://www.instagram.com/cristiano/?hl=en"}
      className="text-black"
      target="blank"
    >
      <FontAwesomeIcon icon={instaIcon} />
    </a>
  );
  return (
    <Container>
      <hr></hr>
      <Stack
        direction={desktop && "horizontal"}
        gap={2}
        className="align-items-center justify-content-center w-100"
      >
        {!desktop && (
          <div>
            <HashLink to="#" smooth className="text-black">
              <FontAwesomeIcon icon={arrowUpIcon}></FontAwesomeIcon>
            </HashLink>
          </div>
        )}
        <AskaleNavLink to="/" footer>
          Home
        </AskaleNavLink>
        <AskaleNavLink to="/catalog/mirrors" footer>
          Products
        </AskaleNavLink>
        {desktop && instaLink}
        <AskaleNavLink to="/contact-us" footer>
          Contact Us
        </AskaleNavLink>
        <AskaleNavLink to="/about-us" footer>
          About Us
        </AskaleNavLink>
        {!desktop && instaLink}
      </Stack>
      <div className="mb-3"></div>
    </Container>
  );
}
