import React from "react";
let index = 0;
export default function Item({ row }) {
  index++;
  return (
    <li className="item">
      <span className="item__index">{index}</span>
      <span className="item__nickname">{row.nickname}</span>
      <span className="item__score">{row.score}</span>
      <span className="item__time">{row.time}</span>

    </li>
 
  );
  
}
