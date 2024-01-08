import React, { Children } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import classes from "./askaleNavLink.module.css";
export default function AskaleNavLink({ to, footer, children }) {
  const match = useMatch(to);
  const navigate = useNavigate(to);
  return (
    <Nav.Link
      href={to}
      onClick={(event) => {
        event.preventDefault();
      }}
      className="p-0"
    >
      <div
        onClick={() => {
          navigate(to);
        }}
        className={`p-2 ${
          footer
            ? classes.FooterLink
            : match
            ? classes.InnerLinkActive
            : classes.InnerLink
        }`}
      >
        {children}
      </div>
    </Nav.Link>
  );
}
