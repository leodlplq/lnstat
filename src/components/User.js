import React from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

export default function User(){

      return (
            <div className="user">
                  <div className="user-form-container">
                        <Login />
                        <div className="separator"></div>
                        <Signup />
                  </div>
      
            </div>
      )
}