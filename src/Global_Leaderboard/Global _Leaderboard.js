import React, { useState } from "react";
import "./Lead_styles.css";
import List from "./List.js";
import { getInitialData } from "./users_item.js";
import { Link } from "react-router-dom";
import ArrrowBack from './back.png';

export default function Leaderboard() {
  const [data] = useState(getInitialData());
    return(
        <div className="App">
          <span className="Leaderboard">GLOBAL LEADERBOARD</span>
          <br />
          <div className="App_head">
              <button type="back" className="App_head_back">
                <Link to="/">
                    <img src={ArrrowBack} alt="back" className="App_head_back" />
                </Link>
              </button>
              <Link to="/account" style={{ textDecoration: 'none' }}>
                <h2 className="Login">Log in</h2>
              </Link>       
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