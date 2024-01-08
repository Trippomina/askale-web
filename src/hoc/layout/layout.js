import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
// import classes from "./layout.module.css";
import AskaleNavbar from "../../components/askaleNavbar/askaleNavbar";
import classes from "./layout.module.css";
import AskaleFooter from "../../components/askaleFooter/askaleFooter";
// import Navbar from "../../../../askale/src/components/appbar/navbar";
// import { Outlet } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase";
// import { AuthActions } from "../../../../askale/src/store/authSlice";
// import { useDispatch } from "react-redux";
export default function Layout() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("checking");
  //     if (user) {
  //       dispatch(AuthActions.loginSuccess({ user }));
  //     }
  //   });
  // }, []);
  return (
    <Stack className={`justify-content-center ${classes.Layout}`}>
      <header>
        <AskaleNavbar />
      </header>
      <main className="flex-grow-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <AskaleFooter />
      </footer>
    </Stack>
  );
}
