import React from "react";
import "./App.css";
import "./styles.css";
import "./Auth-components/App/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./Auth-components/Dashboard/Dashboard";
import Preferences from "./Auth-components/Preferences/Preferences";
import useToken from './Auth-components/App/useToken';
import Login from './Auth-components/Login/Login';
import Leaderboard from "./Leaderboard/Leaderboard";

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/leaderboard">Перейти до Leaderboard</Link>
    </div>
  );
};

export default App;
