import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ORIGIN = `https://api.pandascore.co/`;
const ORIGINDB = `${window.location.protocol}//${window.location.hostname}:3000`
const TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN

export default function League(){
      
    let { slug } = useParams();
    const [videogame, setVideogame] = useState([{image_url:"valorant.jpg"}])
    const [league, setLeague] = useState({
        current_videogame: {
            slug:"loading"
        },
            
    });

    async function getLeagueBySlug(slug){

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${ORIGIN}leagues/${slug}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLeague(result)
                getVideogame(league.current_videogame.slug)
            })
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
        getLeagueBySlug(slug)
        getVideogame(league.current_videogame.slug)
    }, []);
      
    
    /*console.log(videogame[0])
    console.log(slug)
    console.log(league)*/

      return (
            <div className="league-unique">
                  <div className="league-herobanner">
                        <div className="league-background">
                        <img src={require(`../../assets/images/games/${videogame[0].image_url}`)} alt="Valorant"/>
                            <div className="overlay"></div>
                        </div>
                        <div className="league-infos">
                            <div className="league-logo">
                                    <img src={require(`../../assets/images/games-logo/${slug}.png`)} alt="Valorant"/>
                                    <span>X</span>
                                    
                            </div>
                            <h1 className="league-name">{league.name}</h1>
                        </div>
                        
                  </div>
                  
            </div>
      )
}