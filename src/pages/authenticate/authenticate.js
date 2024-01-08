import React, { useState } from "react";
import classes from "./authenticate.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { auth, googleAuthProvider } from "../../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import useBreakpoint from "../../hooks/useBreakpoint";
import { AuthActions } from "../../store/authSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";
export default function Authenticate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { type } = useParams();
  const signUp = type === "sign-up";
  const loading = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const { lg, xl } = useBreakpoint();
  const desktop = lg || xl;
  const signInWithGoogle = () => {
    dispatch(AuthActions.loginStart());
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(AuthActions.loginSuccess({ user, token }));
        console.log(user, "yes");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(AuthActions.loginFailure({ errorMessage }));
        console.log(errorMessage);
      });
  };

  const registerUser = async (email, password, username) => {
    dispatch(AuthActions.loginStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {
          const user = auth.currentUser;
          dispatch(AuthActions.loginSuccess({ user }));
          navigate("/");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(AuthActions.loginFailure({ errorMessage }));
      });
  };

  const loginUser = async (email, password) => {
    dispatch(AuthActions.loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(AuthActions.loginSuccess({ user }));
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(AuthActions.loginFailure({ errorMessage }));
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signUp) {
      await registerUser(email, pwd, username);
    } else {
      await loginUser(email, pwd);
    }
  };

  return (
    <Container
      className={`d-flex flex-column flex-grow-1 align-items-lg-center justify-content-lg-center ${
        desktop && classes.AuthContainer
      }`}
    >
      <Row
        className={`justify-content-center align-items-center ${
          desktop && "w-50"
        }`}
      >
        <Col xs={12} lg={9} className="p-4 bg-white position-relative">
          <NavLink
            to={"/"}
            className="nav-link position-absolute top-0 end-0 m-4 fw-bold z-1"
          >
            <span>X</span>
          </NavLink>
          <form>
            <h2 className="fw-bold mb-3">{signUp ? "SIGN UP" : "LOGIN"}</h2>
            {signUp && (
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  id="exampleInputUsername1"
                />
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {signUp && (
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={pwd}
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="col-12 btn btn-primary mb-3"
            >
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : signUp ? (
                "Sign Up"
              ) : (
                "Log In"
              )}
            </button>
          </form>
          <button
            onClick={signInWithGoogle}
            className="btn border border-1 col-12 shadow-sm  bg-body-tertiary rounded mb-3"
          >
            Continue With Google <FontAwesomeIcon className="ms-2" icon={faG} />
          </button>
          <NavLink
            className="nav-link text-center text-decoration-underline"
            to={signUp ? "/authentication/login" : "/authentication/sign-up"}
          >
            {signUp ? "already a member? Login" : "New member? Create account"}
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}
