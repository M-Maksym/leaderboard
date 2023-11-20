import React, { useState } from "react";
import "./Lead_styles.css";
import List from "./List";
import { getInitialData } from "./users_item.js";
import greeting_icoR from './greeting_R.png';
import greeting_icoL from './greeting_L.png';
import user from './useracc.png';
import { Link } from "react-router-dom";
import useToken from "../useToken.js";
import Login from "../Auth-components/Login/Login.js";

export default function Leaderboard() {
    const [data] = useState(getInitialData());

    const { token, setToken } = useToken();               //protection against unauthorized users
    if(!token) {
      return <Login setToken={setToken} />
    };
    const players = 80;
    return(
        <div className="App">
          <span className="Leaderboard">LEADERBOARD</span>
          <br />
          <div className="Greeting">
            <div className="Greet_txt">
              <img src={greeting_icoL} alt="Greeeting" className="Greeting__icoL" />
              <span className="Greeting__text">You are better than {players}% of players</span>
              <img src={greeting_icoR} alt="Greeeting" className="Greeting__icoR" />
              </div>
              <button type="user_account" className="Greeting_user_account">
                <Link to="/account">
                  <img src={user} alt="user" className="Greeting_user" />
                </Link>
              </button>        
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