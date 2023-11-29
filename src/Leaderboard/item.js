import React from "react";
import Gold from './Gold.png';
import Silver from './Silver.png';
import Bronze from './Bronze.png';
import{getID} from '../User_account/User_account';
import {sendIndex} from './Leaderboard';

let index = 0;  //position in leaderboard
let timer;
let Ind;        //show position
let id = getID(); //user id
console.log(id);  //check id
let user_index = 0;
let global_index = 0;




export default function Item({ row }) {
  // Start timer
  if (!timer) {
    timer = setInterval(() => {
      index = 0;
    }, 2000); // 2 seconds
  }  
  id = getID();
  index++;
  let medalImage = "";
  if (index / 2 === 1) {
    medalImage = Gold;
    Ind = <img src={medalImage} alt="Medal" className="Medal" />;
  } else if (index / 2 === 2) {
    medalImage = Silver;
    Ind = <img src={medalImage} alt="Medal" className="Medal" />;
  } else if (index / 2 === 3) {
    medalImage = Bronze;
    Ind = <img src={medalImage} alt="Medal" className="Medal" />;
  } else {
    Ind = index / 2;
  }


  const isUserItem = row.id === id;

  const className = isUserItem ? "item_u" : "item";
  isUserItem ? user_index = parseInt(Ind, 10) : global_index = parseInt(Ind, 10);
  sendIndex(global_index, user_index);
  
    
      return (
        <li className={className}>
          <span className="item__index">{Ind}</span>
          <span className="item__nickname">{row.firstName}</span>
          <span className="item__score">{row.age}00</span>
          <span className="item__time">{row.id}:00:00</span>
        </li>
        
      );
   
}
