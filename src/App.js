import React from "react";
import "./App.css";
import "./styles.css";
import "./Auth-components/App/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Auth-components/Dashboard/Dashboard";
import Preferences from "./Auth-components/Preferences/Preferences";
import Leaderboard from "./Leaderboard";

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
