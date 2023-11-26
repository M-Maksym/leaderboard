import React, { useState } from 'react';
import "./User_account.css";
import DefaultUser from './default-user.png';
import ArrrowBack from './back.png';
import EditPencil from './pencil.png';
import { Link } from "react-router-dom";
import useToken from 'C:/Users/Maks/my-app/src/Auth-components/App/useToken';
import axios from "axios";



let name_user;
let surname ;
let nickname;
let age;
let score;
let user_avatar;

//function for getting data about user from backend
function get_data_from_server() {
  const headers = {
    'Content-Type': 'application/json',
  };
  const credentials = {
    username: 'kminchelle',
    password: '0lelplR',
  };
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials),
  })
  .then((response) => {
    if (response.ok) {
      const data = response.json();
      //get user's data from server
      name_user = data.firstName;
      surname = data.lastName;
      nickname = data.username;
      age = data.id;
      score = data.score;
      user_avatar = data.image;
      console.log('success');
      return data;
    } else {
      console.error('Error:', response.status);
      return Promise.reject(new Error('Failed to fetch data'));
    }
  })
    .catch((error) => {
      console.log(error);
    });
}




export default function Account() {
  const [isEditMode, setIsEditMode] = useState(false);  //button for input
  const {token} = useToken();
  get_data_from_server(token);

  const [userData, setUserData] = useState({
    name: data.firstName,
    surname: data.lastName,
    nickname: data.username,
    age: data.id,
    score: data.score,
    user_avatar: data.image,
  });
  // name_user = "User";
  // surname = "Super";
  // nickname = "ProGamer";
  // age = 17;
  // score = 1234;
  //get_data_from_server(token);
  
  
  const handleClick = () => {
    // make new input
    const input = document.createElement("input");
    input.type = "text";
    input.name = "nickname";
    
    
    const container = document.querySelector(".User_data_Nick_edit");
    container.appendChild(input);
  
    
    input.focus();
  
    // When push enter - delete input
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && input.value !== "") {
          // save data from input before delete
        
          nickname = input.value;
          
          const NewNickname = {
            Nickname: nickname
          };
          
          axios.put("https://your-server.com/api/users/me", NewNickname)
              .then((response) => {
                console.log(response.data)      
              })
              .catch((error) => {
                console.log(error);
              });
         
          input.remove();
      }
  });
  
  };

  return(

    <div className='Account'>
        <h1 className='Hello_user'>Hello, {name_user}!</h1>
        <div className='User_data'>
            <button type="back" className="User_data_back">
              <Link to="/">
                  <img src={ArrrowBack} alt="back" className="User_data_back" />
              </Link>
              </button>
            <img src={ user_avatar ? user_avatar : DefaultUser} alt="DefUser" className="User_data_DefaultUser" />
            <span className='User_data_text'>Name: {name_user}</span>
            <span className='User_data_text'>Surname: {surname}</span>
            <div className='Nick'>
              <span className='User_data_Nick_text'>Nickname: {nickname}</span>
              
              <button type="button" className="User_data_Nick_edit" onClick={() => {
                  setIsEditMode(!isEditMode);
                  if (isEditMode) {
                  handleClick();
                  }}}>
               <img src={EditPencil} alt="edit" className="User_data_Nick_edit" />
              </button>
            </div>
            <span className='User_data_text'>Age: {age}</span>
            <span className='User_data_text'>your best score: {score}</span>




        </div>
    </div>

  );
}