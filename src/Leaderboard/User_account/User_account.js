import React from 'react';
import "./User_account.css";
import DefaultUser from './default-user.png';
import ArrrowBack from './back.png';
import EditPencil from './pencil.png';
import { Link } from "react-router-dom";

let name_user = "User"
let surname = "Super"
let nickname = "ProGamer"
let age = 17
let score = 1234

export default function Account() {
  return(
    <div className='Account'>
        <h1 className='Hello_user'>Hello, {name_user}!</h1>
        <div className='User_data'>
            <button type="back" className="User_data_back">
              <Link to="/">
                  <img src={ArrrowBack} alt="back" className="User_data_back" />
              </Link>
              </button>
            <img src={DefaultUser} alt="DefUser" className="User_data_DefaultUser" />
            <span className='User_data_text'>Name: {name_user}</span>
            <span className='User_data_text'>Surname: {surname}</span>
            <div className='Nick'>
              <span className='User_data_Nick_text'>Nickname: {nickname}</span>
              <button type="back" className="User_data_Nick_edit">
                  <img src={EditPencil} alt="edit" className="User_data_Nick_edit" />
              </button>
            </div>
            <span className='User_data_text'>Age: {age}</span>
            <span className='User_data_text'>your best score: {score}</span>




        </div>
    </div>

  );
}