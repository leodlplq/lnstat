import React from "react";

import logo from "../../assets/images/logo.png"

export default function TeamCard(props){

      return (
            <div className="team-card">
                  <div>
                        <img src={props.imageUrl != null ? props.imageUrl : logo} alt={`Logo de ${props.name}`} />
                  </div>
                  <p className="team-name">{props.name}</p>
            </div>
      )
}