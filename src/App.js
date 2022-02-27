import React, { useState, useEffect} from "react";
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

const ORIGIN = `${window.location.protocol}//${window.location.hostname}:3000`;

export default function App(){
      const [user, setUser] = useState({id:null});

      useEffect(() => {

            async function getUserData(id){
                  const res = await fetch(`${ORIGIN}/users/${id}`)
                  const data = await res.json()
                  console.log(data)
                  setUser(data);
            }

            
            if(localStorage.getItem("userId") != null){
                  getUserData(localStorage.getItem("userId"))
            } else {
                  console.log('not logged in')
            }
            
      }, []);

      
      return (
            <div className="lnstat-app">
                  
                  <Header user={user} setUserFunction={setUser}/>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/matches" element={<Matches />} />
                        <Route path="/bets" element={<Bets />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/ranking" element={<Ranking />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/user" element={<User setUserFunction={setUser} user={user}/>} />
                  </Routes>
            </div>
      )
}