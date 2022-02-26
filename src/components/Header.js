import React from "react"
import { Link } from "react-router-dom";


import logo from '../assets/images/logo.png'
import userIcon from '../assets/images/icons/user.png'

export default function Header(){
      
      return (
            
            <header>
                  <ul>
                        <li >
                              <Link to="/">
                                    <img src={logo} alt="Logo de lnstat" className="lnstat-logo"/>
                              </Link>
                        </li>
                        <li>
                              <Link to="/matches" className="menu-link">Match</Link>
                        </li>
                        <li >
                              <Link className="menu-link" to="/bets">Paris</Link>
                        </li>
                        <li >
                              <Link className="menu-link" to="/teams">Équipe</Link>
                        </li>
                        <li >
                              <Link className="menu-link" to="/ranking">Classement</Link>
                        </li>
                        <li >
                              <Link className="menu-link" to="/games">Jeux</Link>
                        </li>
                  </ul>

                  <Link to="/user">
                        <img src={userIcon} alt="Icon user" className="icon user-icon"/>
                  </Link>
            </header>
      )
}