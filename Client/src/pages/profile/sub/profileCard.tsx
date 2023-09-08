import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { storage } from "../../../firebase";
import { RootState } from "../../../slices/store";
import { updateImage, updateLoggedIn } from "./../../../slices/userReducer";
const ProfileCard = ({
  user,
  dark,
  medium,
  getUserData,
}: {
  user: any;
  dark: string;
  medium: string;
  getUserData: any;
}) => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image = useAppSelector((state) => state.user.image);
  // Handle deleting the user account action
  const ensuringMessage = useRef<HTMLParagraphElement>(null);
  const deleteAccount = useRef<HTMLButtonElement>(null);
  let timer = 5;
  let intervalID: number | undefined;

  const handleDeleteAccount = () => {
    if (timer < 5) {
      clearInterval(intervalID);
      DeleteUserAccount();
      return;
    }

    if (ensuringMessage.current)
      ensuringMessage.current.innerHTML =
        "All your data will be lost and that can not be undone, are you sure?!";
    if (deleteAccount.current) deleteAccount.current.innerHTML = `${timer} YES`;

    intervalID = window.setInterval(() => {
      if (timer === 0) {
        clearInterval(intervalID);
        timer = 5;
        if (ensuringMessage.current) ensuringMessage.current.innerHTML = "";
        if (deleteAccount.current)
          deleteAccount.current.innerHTML = `Delete Account`;
        return;
      }

      timer--;
      if (deleteAccount.current)
        deleteAccount.current.innerHTML = `${timer} YES`;
    }, 1000);
  };

  const DeleteUserAccount = async () => {
    try {
      const response = await fetch(`http://localhost:8080/profile`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error(`${response.status}`);
      dispatch(updateLoggedIn(false));
      navigate("/");
    } catch (error: any) {
      console.log({
        status: "failed deleting a piece of work",
        error: error.message,
      });
    }
  };
  /* ----------------------------------------------UPLOAD IMAGE ------------------------------------------*/
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const uploadPhoto = (
    <div className="input-container">
      <div className="img-file-container">
        <svg viewBox="0 0 512 512">
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
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

  useEffect(() => {
    if (uploadImage) {
      if (user.image !== "/Male.png" && user.image !== "/Female.png") {
        const prevImageUrl = "images/" + user.imageName;
        console.log("enter");
        const prevImageRef = ref(storage, prevImageUrl as string); // get the reference from the url
        deleteObject(prevImageRef) // delete the image
          .then(() => {
            console.log("Image deleted successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      const imageName = uploadImage.name + v4();
      const imageRef = ref(storage, `images/${imageName}`);
      uploadBytes(imageRef, uploadImage)
        .then(() => {
          console.log("Image uploaded successfully");
          getDownloadURL(imageRef)
            .then((url) => {
              fetch("http://localhost:8080/auth/image", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  imageName: `${imageName}`,
                  image: url.toString(),
                  id: user._id,
                }),
              })
                .then(() => {
                  getUserData();
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [uploadImage]);

  //  -------------------------------------------------------------------------------------------------------------
  return (
    <div id="profile-card" style={{ backgroundColor: medium }}>
      <div id="profile-img-container">
        <img src={image as string}></img>
        {uploadPhoto}
      </div>
      <div id="user-info">
        <h2>{user.name}</h2>
        <p style={{ color: dark }}>{user.email}</p>
      </div>
      <div id="delete-account">
        <p ref={ensuringMessage}></p>
        <button ref={deleteAccount} onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
