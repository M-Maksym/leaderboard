import React from "react";
import Gold from './Gold.png';
import Silver from './Silver.png';
import Bronze from './Bronze.png';

let index = 0;
let timer;
let Ind;

export default function Item({ row }) {
  // Start timer
  if (!timer) {
    timer = setInterval(() => {
      index = 0;
    }, 2000); // 2 seconds
  }  

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

  return (
    <li className="item">
      <span className="item__index">{Ind}</span>
      <span className="item__nickname">{row.username}</span>
      <span className="item__score">{row.score}</span>
      <span className="item__time">{row.time}</span>
    </li>
  );
}
