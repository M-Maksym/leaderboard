import React from "react";
import Gold from './Gold.png';
import Silver from './Silver.png';
import Bronze from './Bronze.png';
import useToken from "../useToken.js";
import axios from "axios";

let index = 0;
let timer;
let Ind;
let user_id = -1;




export default function Item({ row }) {
  const {token} = useToken();
  function get_data_from_server(token){
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.get("https://your-server.com/api/users/me", { headers })
      .then((response) => {
        const data = JSON.parse(response.data);
        //get user`s id from server
        user_id = data.id;
      })
      .catch((error) => {
        console.log(error);
      });
    }

    get_data_from_server(token);

  

  // Start timer
  if (!timer) {
    timer = setInterval(() => {
      index = 0;
    }, 2000); // 2 seconds
  }  

  index++;
  let medalImage = "";      //image for winners
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

  const isUserItem = row.id === user_id;
  const className = isUserItem ? "item_u" : "item";
  const className_index = isUserItem ? "item__index_u" : "item__index";
  const className_nickname = isUserItem ? "item__nickname_u" : "item__nickname";
  const className_score = isUserItem ? "item__score_u" : "item__score";
  const className_time = isUserItem ? "item__time_u" : "item__time";


  return (
    
    <li className={className}>
      <span className={className_index}>{Ind}</span>
      <span className={className_nickname}>{row.username}</span>
      <span className={className_score}>{row.score}</span>
      <span className={className_time}>{row.time}</span>
    </li>
  );
}
