import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectLoggedIn } from "../../slices/userReducer";
import './profile.css';
import WorkPiece from "./sub/workPiece";
import ProfileCard from "./sub/profileCard";


const Profile = () => {
  //Check if the user is logged in
  const navigate = useNavigate();
  
  const loggedIn = useSelector(selectLoggedIn);  
  useEffect(()=> {
    if(!loggedIn) navigate('/logIn');
    getUserData();
    // getUserWork();
  }, [loggedIn]);

  const [user, setUser] = useState({name: '', gender: '', email: '', _id: ''});
  const dummyUserWork = [
    {title: 'this is my first resume created with love', type:'resume', _id: ''},
    {title: 'Die golato die ryal madrid', type:'cover-letter'},
    {title: 'r1', type:'resume'},{title: 'c1', type:'cover-letter'},
    {title: 'omg omg omg omg omg omg omg', type:'resume'},{title: 'c2', type:'cover-letter'},
    {title: 'r1', type:'resume'},{title: 'c1', type:'cover-letter'},
    {title: 'bla bla bla bla bla bla bla bla bla', type:'resume'},{title: 'c1', type:'cover-letter'},
    {title: 'r2', type:'resume'},{title: 'c2', type:'cover-letter'},
    {title: 'r2', type:'resume'},{title: 'c2', type:'cover-letter'},
    {title: 'r1', type:'resume'},{title: 'c1', type:'cover-letter'},
    {title: 'r2', type:'resume'},{title: 'c2', type:'cover-letter'},
    {title: 'r1', type:'resume'},{title: 'c1', type:'cover-letter'},
    {title: 'r2', type:'resume'},{title: 'c2', type:'cover-letter'}
  ];
  const [userWork, setUserWork] = useState(dummyUserWork);
  const [loading, setLoading] = useState(true);
  
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
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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

  const loadingScreen = (
    <div id="loading">
      <h1>Loading...</h1>
    </div>
  );

  type Colors = {
    [key: string]: string;
    'MaleDark':  string;
    'MaleMedium':  string;
    'MaleLight':  string;
    'FemaleDark': string;
    'FemaleMedium': string;
    'FemaleLight': string;
  }
  const colors: Colors = {
    'MaleDark': '#0043b7',
    'MaleMedium': '#9ceafd',
    'MaleLight': '#c3f1fd',
    'FemaleDark': '#bf0108',
    'FemaleMedium': '#ffd8c9',
    'FemaleLight': '#fff6f1',
  }

  const profileScreen = (
    <>
      <ProfileCard user={user} dark={colors[`${user.gender}Dark`]} medium={colors[`${user.gender}Medium`]}/>
      <div id="user-work-area">
        {userWork.map((work, index)=>(
          <WorkPiece 
          key={index} 
          userWork={userWork} 
          setUserWork={setUserWork} 
          work={work} 
          light={colors[`${user.gender}Light`]} 
          dark={colors[`${user.gender}Dark`]}/>
        ))}
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