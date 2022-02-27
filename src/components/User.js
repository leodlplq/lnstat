import React, {useState, useEffect} from "react";

import Auth from "./auth/Auth";



export default function User(props){
      console.log(props.user);

      return (
            <div className="user">
                  {props.user.id == null ? <Auth setUserFunction={props.setUserFunction} /> : <h1>Salut {props.user.username}, ton mail est {props.user.email}</h1>}
            </div>
      )
}