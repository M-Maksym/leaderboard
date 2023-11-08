import React from 'react';
import "./User_account.css";
import DefaultUser from './default-user.png';

let name_user = "User"
let surname = "Super"
let nickname = "ProGamer"
let age = 17
let score = 1234

export default function Account() {
  return(
    <div className='Account'>
        <h1 className='Hello_user'>Hello, {name_user}</h1>
        <div className='User_data'>
            <img src={DefaultUser} alt="DefUser" className="User_data_DefaultUser" />
            <span className='User_data_Name'>Name: {name_user}</span>
            <span className='User_data_Surname'>Surname: {surname}</span>
            <span className='User_data_Nickname'>Nickname: {nickname}</span>

            <span className='User_data_Age'>Age: {age}</span>
            <span className='User_data_Score'>your best score: {score}</span>




        </div>
    </div>

  );
}