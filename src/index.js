import React, { useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import List from "./List";
import { getInitialData} from "./data/users_item.js";

  
function App() {
  const [data] = useState(getInitialData());
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
      ).then(response => response.json());
  
      console.log(actualData) 
    }
    getData()
  }, [])

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
