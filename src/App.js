import React from "react";
import {
      Routes,
      Route,
    } from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import Matches from "./components/Matches";
import Bets from "./components/Bets";
import Teams from "./components/Teams";
import Ranking from "./components/Ranking";
import Games from "./components/Games";
import User from "./components/User"


export default function App(){

      return (
            <div className="lnstat-app">
                  
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/matches" element={<Matches />} />
                        <Route path="/bets" element={<Bets />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/ranking" element={<Ranking />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/user" element={<User />} />
                  </Routes>
            </div>
      )
}