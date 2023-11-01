import React from "react";

let index = 0;
let timer;

export default function Item({ row }) {
  // Start timer
  if (!timer) {
    timer = setInterval(() => {
      index = 0;
    }, 2000); // 2 seconds
  }  
  index++;

  return (
    <li className="item">
      <span className="item__index">{index/2}</span>
      <span className="item__nickname">{row.username}</span>
      <span className="item__score">{row.score}</span>
      <span className="item__time">{row.time}</span>

    </li>
  );

}
