import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { storage } from "../../firebase";
import { RootState } from "../../slices/store";
import {
  updateExpires,
  updateImage,
  updateLoggedIn,
} from "../../slices/userReducer";
import "./register.css";

export default function Register() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [EmailTaken, setEmailTaken] = useState(false);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const image = useAppSelector((state) => state.user.image);
  const uploadPhoto = (
    <div className="img-container">
      <div className="img-file-container">
        <div className="img-container">
          <img src={image as string} alt="personal image" className="img" />
        </div>
        <div className="text">Upload photo</div>
        <input
          style={{ color: "red" }}
          type="file"
          className="file"
          onChange={(event) => {
            const reader = new FileReader();
            reader.onload = () => dispatch(updateImage(reader.result));
            if (event.target.files) {
              reader.readAsDataURL(event.target.files[0]);
              setUploadImage(event.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
  const onSubmit = () => {
    let ok = false;
    let status = 200;
    const url = `http://localhost:8080/auth${location.pathname}`;
    const logIn = {
      email: Email,
      password: Password,
    };
    dispatch(updateImage(Gender === "Male" ? "/Male.png" : "/Female.png"));
    const signUp = {
      image: Gender === "Male" ? "/Male.png" : "/Female.png",
      name: UserName,
      email: Email,
      gender: Gender,
      password: Password,
      confirmPassword: ConfirmPassword,
    };
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(location.pathname === "/logIn" ? logIn : signUp),
    })
      .then((res) => {
        console.log("🚀 ~ file: register.tsx:77 ~ .then ~ res:", res);
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (ok) {
          if (data.image !== undefined) dispatch(updateImage(data.image));
          console.log(data.taken);
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            dispatch(updateExpires(true));
          }, 60 * 60 * 1000 * 2);
          dispatch(updateLoggedIn(true));
          navigate("/");
          setWrongEmail(false);
          setWrongPassword(false);
          if (EmailRef.current)
            EmailRef.current.style.borderBottomColor = "white";
          if (PasswordRef.current)
            PasswordRef.current.style.borderBottomColor = "white";
        } else if (status === 422) {
          alert(data[0].message);
          console.log(data);
        } else {
          if (data.error === "Invalid email") {
            if (EmailRef.current) {
              EmailRef.current.value = "";
              EmailRef.current.style.borderBottomColor = "red";
            }
            setWrongEmail(true);
          }
          if (data.error === "Invalid password") {
            if (PasswordRef.current) {
              PasswordRef.current.value = "";
              PasswordRef.current.style.borderBottomColor = "red";
            }
            setWrongPassword(true);
            setWrongEmail(false);
            if (EmailRef.current)
              EmailRef.current.style.borderBottomColor = "white";
          }
          if (data.error === "Email is already taken") {
            setEmailTaken(true);
            if (EmailRef.current) {
              EmailRef.current.value = "";
              EmailRef.current.style.borderBottomColor = "red";
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(location.pathname);
    setTimeout(() => {
      if (uploadImage) {
        const imageName = uploadImage.name + v4();
        const imageRef = ref(storage, `images/${imageName}`);
        uploadBytes(imageRef, uploadImage);
        const imageListRef = ref(storage, `images/`);
        listAll(imageListRef).then((res) => {
          getDownloadURL(res.items[res.items.length - 1]).then((urL) => {
            urL = urL.toString();
            console.log(
              localStorage.getItem("token"),
              "hfkjsahlkfjhaskjdfhlkjashdflkjhsafdlkjhsalkdjfhkasjhdfkjshdflkjshfkjshdfkljhsfkjhasdffkjhalksjfhlkasjhfdksafhdkjsdhjf"
            );
            fetch("http://localhost:8080/auth/me", {
              method: "GET",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
              .then((res) => res.json())
              .then((data) => {
                fetch("http://localhost:8080/auth/image", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    image: urL,
                    id: data.user._id,
                  }),
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      }
    }, 100);
  };

  const username = (
    <div className="input-box">
      <input
        type="text"
        className="input-control"
        name="Name"
        id="name"
        required
        onChange={(e) => setUserName(e.target.value)}
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
        required
        ref={EmailRef}
        onChange={(e) => setEmail(e.target.value)}
      />
      {(wrongEmail && (
        <div className="wrong">Email doesn't exist please try again</div>
      )) ||
        (EmailTaken && <div className="wrong">Email is already taken</div>)}
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
        ref={PasswordRef}
      />
      {wrongPassword && (
        <div className="wrong">Wrong password please try again</div>
      )}
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
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword" className="label-control">
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
      <label className="gender-label">Gender</label>
      <div>
        <label>
          <input
            type="radio"
            className="gender-input"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            className="gender-input"
            name="gender"
            value="Female"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          Female
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
          encType="multipart/form-data"
          autoComplete="on"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
            return false;
          }}
        >
          {location.pathname === "/signUp" && uploadPhoto}
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
