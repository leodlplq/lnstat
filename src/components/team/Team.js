import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../../assets/images/logo.png"
import bg from "../../assets/images/background/background-team.png"

const ORIGIN = `https://api.pandascore.co/`;
const TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN



export default function Team(){
      
      let { slug } = useParams();
      const [team, setTeam] = useState({});

      console.log(slug, team)

      async function getTeamBySlug(slug){

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${TOKEN}`);

            var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  redirect: 'follow'
            };

            fetch(`${ORIGIN}teams/${slug}`, requestOptions)
                  .then(response => response.json())
                  .then(result => setTeam(result))
                  .catch(error => console.log('error', error));
      }

      useEffect(() => {
            console.log(TOKEN)
            getTeamBySlug(slug)
      }, []);
      
      return (
            <div className="team-unique">
                  <div className="team-herobanner">
                        <div className="team-background">
                              <img src={bg} alt="background"/>
                              <div className="overlay"></div>
                        </div>
                        <div className="team-logo">
                              <img src={team.image_url != null ? team.image_url : logo} alt="Logo de " />
                              <h1 className="team-name">{team.name}</h1>
                        </div>
                  </div>
            </div>
      )
}