import React from "react";

export default function GameCard(props){

      return (
            <div className="game-card">
                  <div className="left">
                        <img src={require(`../../assets/images/games/${props.image_url}`)} alt="Valorant" />
                  </div>
                  <div className="right">
                        <h2 className="game-title">{props.name}</h2>
                        <p className="game-description">{props.description}</p>
                  </div>
            </div>
      )

}