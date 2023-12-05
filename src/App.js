import React from "react";
import "./App.css";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leaderboard from "./Leaderboard/Leaderboard";
import UserAccount from "./User_account/User_account";
import GeneralPage from "./General_page/General_page";
import GlobalLeaderboard from './Global_Leaderboard/Global _Leaderboard'
import Registration from "./Auth-components/Registration/Registration"

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<UserAccount />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/global-leaderboard" element={<GlobalLeaderboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<GeneralPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
