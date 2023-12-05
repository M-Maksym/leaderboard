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
    Ind = <img src={medalImage} alt="Medall" className="Medal" />;
  } else if (index / 2 === 2) {
    medalImage = Silver;
    Ind = <img src={medalImage} alt="Medall" className="Medal" />;
  } else if (index / 2 === 3) {
    medalImage = Bronze;
    Ind = <img src={medalImage} alt="Medall" className="Medal" />;
  } else {
    Ind = index / 2;
  }


  const isUserItem = row.id === id;

  const className = isUserItem ? "item_user" : "items";
  isUserItem ? user_index = parseInt(Ind, 10) : global_index = parseInt(Ind, 10);
  sendIndex(global_index, user_index);
  

      return (
        <li className={className}>
          <span className="item_index">{Ind}</span>
          <span className="item_nickname">{row.attributes.nickname}</span>
          <span className="item_score">{row.attributes.score}</span>
          <span className="item_time">{row.attributes.time}</span>
        </li>
        
      );
   
}
