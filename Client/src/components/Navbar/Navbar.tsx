import { useEffect } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../slices/store";
import personalImg from "../../assets/user.png";
import {
  updateExpires,
  updateFetch,
  updateImage,
  updateLoggedIn,
} from "../../slices/userReducer";
import "./Navbar.css";
const NavBar = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const expires = useAppSelector((state) => state.user.expires);
  const image = useAppSelector((state) => state.user.image);
  const dispatch = useDispatch();
  console.log(image);
  useEffect(() => {
    if (expires) {
      dispatch(updateImage(personalImg));
      dispatch(updateLoggedIn(false));
      dispatch(updateExpires(false));
    }
  }, [expires, dispatch]);
  const stillLoggedIn = () => {
    fetch("http://localhost:8080/auth/me", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => {
        if (res.ok) {
          dispatch(updateLoggedIn(true));
        }
        return res.json();
      })
      .then((data) => {
        dispatch(updateImage(data.user.image));
        dispatch(updateFetch(true));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (
    !loggedIn &&
    localStorage.getItem("token") !== "" &&
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== undefined
  ) {
    stillLoggedIn();
  }
  const logOut = () => {
    dispatch(updateLoggedIn(false));
    dispatch(updateExpires(true));
    localStorage.setItem("token", "");
  };
 
  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Resumeness</h1>
      </Link>
      <div id="links">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to={!loggedIn ? "/logIn" : "/resume"}>
          <span>Resume</span>
        </Link>
        <Link to={!loggedIn ? "/logIn" : "/cover-letter"}>
          <span>Cover Letter</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <p className="vertical-line">|</p>
        {!loggedIn ? (
          <>
            <Link to="/logIn">
              <span className="logIn">Log In</span>
            </Link>
            <Link to="/signUp">
              <span className="signUp">Sign Up</span>
            </Link>
          </>
        ) : (
          <>
            <span className="logOut" onClick={logOut}>
              Log Out
            </span>
            <Link to="/profile">
              <div className="personalImg">
                <img src={image as string} alt="user image" />
              </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
