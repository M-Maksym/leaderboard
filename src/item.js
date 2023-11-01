import React from "react";
let index = 0;
export default function Item({ row }) {
  index++;        //place on the leaderboard
  return (
    <li className="item">
      <span className="item__index">{index/2}</span>
      <span className="item__nickname">{row.username}</span>
      <span className="item__score">{row.score}</span>
      <span className="item__time">{row.time}</span>

    </li>
 
  );
  
}
