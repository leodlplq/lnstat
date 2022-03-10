import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LeagueCard from "./LeagueCard";

import logo from "../../assets/images/logo.png"
import bgf from "../../assets/images/games/rocket-league.jpg"

const ORIGIN = `https://api.pandascore.co/`
const ORIGINDB = `${window.location.protocol}//${window.location.hostname}:3000`
const TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN



export default function League(){
      
      let { slug } = useParams()
      let { bg } = useParams()
      const [leagues, setLeagues] = useState([])
      const [videogame, setVideogame] = useState([{image_url:"valorant.jpg"}])

      console.log(leagues.length)

      async function getLeagueBySlug(slug){

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${TOKEN}`);

            var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  redirect: 'follow'
            };

            fetch(`${ORIGIN}videogames/${slug}/leagues`, requestOptions)
                  .then(response => response.json())
                  .then(result => setLeagues(result))
                  .catch(error => console.log('error', error));
      }

      async function getVideogame(slug){

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${TOKEN}`);

            var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  redirect: 'follow'
            };

            fetch(`${ORIGINDB}/games?slug=${slug}`, requestOptions)
                  .then(response => response.json())
                  .then(result => setVideogame(result))
                  .catch(error => console.log('error', error));
      }

      useEffect(() => {
            console.log(TOKEN)
            getLeagueBySlug(slug)
            getVideogame(slug)
      }, []);
      
      return (
            <div className="league-game">
                  <div className="league-herobanner">
                        <div className="league-background">
                              <img src={require(`../../assets/images/games/${videogame[0].image_url}`)} alt="Valorant"/>
                              <div className="overlay"></div>
                        </div>
                        <div className="league-logo">
                              <img src={leagues.image_url != null ? leagues.image_url : logo} alt="Logo de " />
                              <h1 className="league-name">{leagues.name}</h1>
                        </div>
                  </div>
                  <div className="leagues">
                        <div className="league-container">
                              {leagues.length !== 0 ? leagues.map(el=><LeagueCard key={el.id} slugLeague={el.slug} name={el.name} imageUrl={el.image_url} leagueGame={el.videogame.name}/>) : "loading"}                      
                        </div>
                  </div>
            </div>
      )
}