import React, { useState } from 'react';
import "./User_account.css";
import DefaultUser from './default-user.png';
import ArrrowBack from './back.png';
import EditPencil from './pencil.png';
import { Link } from "react-router-dom";
import useToken from "../useToken";
import Login from '../Auth-components/Login/Login';

let name_user = "User";                   //default variable
let surname = "Super";
let nickname = "mProGamer";
let age = 17;
// eslint-disable-next-line
let score = 1234;
let user_avatar;
let id;

//function for getting data about user from backend
function get_data_from_server(token){
  const credentials = {
    username: 'kminchelle',
    password: '0lelplR',
  };
  console.log('start fetch');
  return fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(credentials)
  
})
.then(data => data.json())
.then(response => {
  console.log(response);
  const user = response; // Get the user object from the response
  name_user = user.firstName;
  surname = user.lastName;
  nickname = user.username;
  age = user.id;
  score = user.id;
  user_avatar = user.image;
  id = user.id;
  console.log('success');
})
.catch((error) => {
  console.error(error);
});
}

export function getID(){
  return id;
}


export default function Account() {
  const [isEditMode, setIsEditMode] = useState(false);  //button for input

  const { token, setToken } = useToken();               //protection against unauthorized users
  if(!token) {
    return <Login setToken={setToken} />
  };

  get_data_from_server(token);

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
          
          fetch('https://dummyjson.com/users/15', {
              method: 'PUT', /* or PATCH */
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: nickname
              })
            })
            .then(res => res.json())
            .then(console.log);
         
          input.remove();
      }
  });
  
  };

  return(

    <div className='Account'>
        <h1 className='Hello_user'>Hello, {name_user}!</h1>
        <div className='User_data'>
            <button type="back" className="User_data_back">
              <Link to="/leaderboard">
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
            <span className='User_data_text'>your best score: 86345</span>




        </div>
    </div>

  );
}