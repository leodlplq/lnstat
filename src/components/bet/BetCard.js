import React from "react";

import logo from "../../assets/images/logo.png"

export default function BetCard(props){

      //console.log(props)

      return (
        <div className="bets-card">
            <div className="teams-bets">
                <div className="team">
                        <div className="team-logo">
                            <img src={props.opponents[0].opponent.image_url} alt="Logo" />
                        </div>
                        <span>{props.opponents[0].opponent.name}</span>
                </div>

                <div className="team">
                        <div className="team-logo">
                            <img src={props.opponents[1].opponent.image_url} alt="Logo" />
                        </div>
                        <span>{props.opponents[1].opponent.name}</span>
                </div>
            </div>
            <div className="bets-info">
                <span>Status : {props.status == "not_finish" ? "Non terminé" : "Terminé"}</span>
                <span>Montant : {props.amount} coins</span>
                {props.status == "finish"  ?( props.winned ? <span>Gagné</span> : <span>Perdu</span>) : ""}
            </div>
    </div>)
}