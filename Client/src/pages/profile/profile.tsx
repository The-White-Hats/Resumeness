import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectLoggedIn } from "../../slices/userReducer";
import './profile.css';


const Profile = () => {
  //Check if the user is logged in
  const navigate = useNavigate();
  const loggedIn = useSelector(selectLoggedIn);  
  if(!loggedIn) navigate('/logIn');
  // useEffect(()=> {
  //   setTimeout(() => {
  //   }, 4000);
  // }, [loggedIn]);

  const [user, setUser] = useState({name: 'Ahmed Aladdin', gender: 'Male', email: 'ahmed@gmail.com'});
  const [userWork, setUserWork] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // first, get the data of the user from the server
  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await response.json();
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };
  // getUserData();

  // second, get the work of that user from the server
  const getUserWork = async () => {
    try {
      const response = await fetch("http://localhost:8080/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
      });
      const work = await response.json();
      setUserWork(work);
    } catch (err) {
      console.log(err);
    }
  }
  // getUserWork();

  const loadingScreen = (
    <div id="loading">
      <h1>Loading...</h1>
    </div>
  );

  const profileScreen = (
    <>
      <div id="profile-card">
        <div id="profile-img-container">
          <img src={`/${user.gender}.png`}></img>
        </div>
        <div id="user-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div id="delete-account">
          <button>Delete Account</button>
        </div>
      </div>
      <div id="user-work-area">
        what abput me, why not showing me?
      </div>
    </>
  );

  return (
    <section id="profile-page">
      {loading ? loadingScreen : profileScreen} 
    </section>
  );
}

export default Profile;