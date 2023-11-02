import React, { useState } from "react";
import "./Lead_styles.css";
import List from "./List";
import { getInitialData } from "./users_item.js";
import greeting_icoR from './greeting_R.png';
import greeting_icoL from './greeting_L.png';

export default function Leaderboard() {
    const [data] = useState(getInitialData());
    const players = 80;
    return(
        <div className="App">
          <span className="Leaderboard">LEADERBOARD</span>
          <br />
          <div className="Greeting">
          <img src={greeting_icoL} alt="Greeeting" className="Greeting__icoL" />
            <span className="Greeting__text">You are better than {players}% of players</span>
            <img src={greeting_icoR} alt="Greeeting" className="Greeting__icoR" />
          </div>
          <br />
          <li className="itemOrientation">
            <span className="itemOrientation__index"> </span>
            <span className="itemOrientation__nickname">Nickname</span>
            <span className="itemOrientation__score">Score</span>
            <span className="itemOrientation__time">Time</span>
          </li>
          <List data={data} />
        </div>
    );
  }