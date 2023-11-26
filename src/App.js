import React from "react";
import "./App.css";
import "./styles.css";
import "./Auth-components/App/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Auth-components/Dashboard/Dashboard";
import Preferences from "./Auth-components/Preferences/Preferences";
import Leaderboard from "./Leaderboard/Leaderboard";
import UserAccount from "./User_account/User_account";
import GeneralPage from "./General_page/General_page";
import GlobalLeaderboard from './Global_Leaderboard/Global _Leaderboard'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/global-leaderboard" element={<GlobalLeaderboard />} />
          <Route path="/" element={<GeneralPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
