import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateLoggedIn } from "../../slices/userReducer";
import "./register.css";

export default function Register() {
  const dispatch = useDispatch();
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    const url = `http://localhost:8080/auth${location.pathname}`;
    const logIn = {
      email: Email,
      password: Password,
    };
    const signUp = {
      name: UserName,
      email: Email,
      gender: Gender,
      password: Password,
      confirmPassword: ConfirmPassword,
    };
    console.log(
      location.pathname,
      location.pathname === "/logIn" ? logIn : signUp
    );
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(location.pathname === "/logIn" ? logIn : signUp),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch(updateLoggedIn(true));
        navigate("/");
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const username = (
    <div className="input-box">
      <input
        type="text"
        className="input-control"
        name="Name"
        id="name"
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <label htmlFor="name" className="label-control">
        Username
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const email = (
    <div className="input-box">
      <input
        type="email"
        className="input-control"
        name="Email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="email" className="label-control">
        Email
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    </div>
  );

  const password = (
    <div className="input-box">
      <input
        type="password"
        className="input-control"
        name="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="password" className="label-control">
        Password
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const confirmPassword = (
    <div className="input-box">
      <input
        type="password"
        className="input-control"
        name="confirmPassword"
        id="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <label htmlFor="password" className="label-control">
        Confirm Password
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const gender = (
    <div className="input-box gender-box">
      <label className="gender-label">
        Gender
      </label>
      <div>
        <label>
          <input
            type="radio"
            className="gender-input"
            name="gender"
            value = "Male"
            onChange={(e) => setGender(e.target.value)}
            required
          />Male
        </label>
        <label>
          <input
            type="radio"
            className="gender-input"
            name="gender"
            value = "Female"
            onChange={(e) => setGender(e.target.value)}
            required
          />Female
        </label>
      </div>
    </div>
  );

  const elements = [
    location.pathname === "/signUp" && username,
    email,
    location.pathname === "/signUp" && gender,
    password,
    location.pathname === "/signUp" && confirmPassword,
  ];

  const signUp = (
    <p className="noAccount">
      {`Don't have an account? `}
      <Link to="/signUp">
        <span className="register">Sign Up</span>
      </Link>
    </p>
  );

  const form = (
    <div className="contact-form-container">
      <div className="contact-form">
        <form
          autoComplete="on"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
            return false;
          }}
        >
          {elements}
          <div className="submit-container">
            <input
              type="submit"
              value={location.pathname === "/signUp" ? "Sign Up" : "Log In"}
              className="submit"
            />
            {location.pathname === "/logIn" && signUp}
          </div>
        </form>
      </div>
    </div>
  );

  return form;
}
