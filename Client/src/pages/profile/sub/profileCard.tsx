import { useRef } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../slices/store";
import { updateLoggedIn } from "./../../../slices/userReducer";
const ProfileCard = ({
  user,
  dark,
  medium,
}: {
  user: any;
  dark: string;
  medium: string;
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

  return (
    <div id="profile-card" style={{ backgroundColor: medium }}>
      <div id="profile-img-container">
        <img src={image as string}></img>
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
