import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AskaleNavLink from "./askaleNavLink/askaleNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping as cartIcon } from "@fortawesome/free-solid-svg-icons";
import useBreakpoint from "../../hooks/useBreakpoint";
export default function AskaleNavbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "catalog/mirrors", label: "Mirrors" },
    { to: "catalog/tables", label: "Tables" },
    { to: "catalog/units", label: "Units" },
    { to: "catalog/seating", label: "Seating" },
    { to: "about-us", label: "About Us" },
    { to: "contact-us", label: "Contact Us" },
  ];
  const { lg, xl } = useBreakpoint();
  const desktop = lg || xl;
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/askale-10c98.appspot.com/o/logo%2Fv1%2FASKALE-LOGO.png?alt=media"
            alt="Askale_logo"
            width="100"
            height="50"
          />
        </Navbar.Brand>
        {!desktop && (
          <Stack direction="horizontal" gap={3}>
            <AskaleNavLink to="cart">
              <FontAwesomeIcon icon={cartIcon} />
            </AskaleNavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Stack>
        )}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            {navItems.map((item, index) => (
              <AskaleNavLink to={item.to} key={index}>
                <span className="fw-medium">{item.label}</span>
              </AskaleNavLink>
            ))}

            {!desktop && (
              <Stack direction="horizontal" className="fw-bold">
                <AskaleNavLink to="authentication/sign-up">
                  <span>Sign up</span>
                </AskaleNavLink>
                |
                <AskaleNavLink to="authentication/login">
                  <span>Login</span>
                </AskaleNavLink>
              </Stack>
            )}
          </Nav>
          {desktop && (
            <Stack direction="horizontal" gap={3}>
              <AskaleNavLink to="cart">
                <FontAwesomeIcon icon={cartIcon} />
              </AskaleNavLink>
              <Stack direction="horizontal" className="fw-bold">
                <AskaleNavLink to="authentication/sign-up">
                  <span>Sign up</span>
                </AskaleNavLink>
                |
                <AskaleNavLink to="authentication/login">
                  <span>Login</span>
                </AskaleNavLink>
              </Stack>
            </Stack>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
