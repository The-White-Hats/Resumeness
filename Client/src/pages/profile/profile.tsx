import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectLoggedIn } from "../../slices/userReducer";
import './profile.css';


const Profile = () => {
  //Check if the user is logged in
  const navigate = useNavigate();
  const loggedIn = useSelector(selectLoggedIn);  
  useEffect(()=> {
    if(!loggedIn) navigate('/logIn');
    
  }, [loggedIn]);

  const [user, setUser] = useState({name: 'Amal Ashraf', gender: 'Female', email: 'amal@gmail.com'});
  const dummyUserWork = [
    {title: 'this is my first resume created with love', type:'resume'},
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

  const DeletePieceOfWork = async (work : any) => {
    try {
      await fetch(`http://localhost:8080/${work.type}/delete`, {
        method: "DELETE"
      });
    } catch (error : any) {
      console.log({status: 'failed deleting a piece of work', error: error.message});
    }
  };

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
      <div id="profile-card" style={{backgroundColor: colors[`${user.gender}Medium`]}}>
        <div id="profile-img-container">
          <img src={`/${user.gender}.png`}></img>
        </div>
        <div id="user-info">
          <h2>{user.name}</h2>
          <p style={{color: colors[`${user.gender}Dark`]}}>{user.email}</p>
        </div>
        <div id="delete-account">
          <button>Delete Account</button>
        </div>
      </div>
      <div id="user-work-area">
        {userWork.map((work, index)=>(
          <div key={index} className="work-card" style={{backgroundColor: colors[`${user.gender}Light`]}}>
            <div className="card-info">
              <h2><span>Title:</span> {work.title}</h2>
              <p style={{color: colors[`${user.gender}Dark`]}}>{work.type}</p>
            </div>
            <button className="options-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" fill={colors[`${user.gender}Dark`]}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
            </button>
            <div className="card-buttons">
              <button className="edit-card">Edit</button>
              <button className="edit-card">download</button>
              <button className="delete-card" onClick={()=>DeletePieceOfWork(work)}>Delete</button>
            </div>
          </div>
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