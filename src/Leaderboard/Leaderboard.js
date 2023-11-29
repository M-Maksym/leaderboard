import React, { useState, useEffect } from "react";
import "./Lead_styles.css";
import List from "./List";
import { getInitialData } from "./users_item.js";
import greeting_icoR from './greeting_R.png';
import greeting_icoL from './greeting_L.png';
import user from './useracc.png';
import { Link } from "react-router-dom";
import useToken from "../useToken.js";
import Login from "../Auth-components/Login/Login.js";


let g_index = 10;
let u_index = 10;
// eslint-disable-next-line
let count = 0;

export function sendIndex(global_index, user_index){
  g_index = global_index;
  u_index = user_index;
}



export default function Leaderboard() {
    const [data] = useState(getInitialData());
    const { token, setToken } = useToken();               
    const [players, setPlayers] = useState(0);

  useEffect(() => {                           //update procent
    const timerId = setInterval(() => {
      let updatedProcent = 100 - (u_index * 100) / g_index;
      Math.round(updatedProcent);
      setPlayers(updatedProcent); // Update the players state
      console.log('Update players procent: ' + updatedProcent);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(timerId); // Clean up the timer
  }, []);

    if(!token) {                                              //protection against unauthorized users
      return <Login setToken={setToken} />
    };

      
    
    return(
        <div className="App">
          <span className="leaderboard">LEADERBOARD</span>
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