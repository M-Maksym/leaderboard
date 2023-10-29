import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import List from "./List";
import { getInitialData} from "./users_item.js";

  
function App() {
  const [data] = useState(getInitialData());
 
  return (
    <div className="App">
      <span className="Leaderboard">LEADERBOARD</span>
      <br />     
      <li className="itemOrientation">
        <span className="itemOrientation__index">  </span>
        <span className="itemOrientation__nickname">Nickname</span>      
        <span className="itemOrientation__score">Score</span>
        <span className="itemOrientation__time">Time</span>
      </li>
      <List data={data} />
    </div>
    
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
