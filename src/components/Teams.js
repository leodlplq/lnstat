import React , {useState, useEffect} from "react";
import TeamCard from "./team/TeamCard";

const ORIGIN = `https://api.pandascore.co/`;

export default function Teams(){

      const [teams, setTeams] = useState([]);
      
      useEffect(() => {

            async function getTeamsData(page, perPage){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", "Bearer lW0z9941sGd0RhjJrfE-l5ukgkcxiYSAqYneflYSPl63Pl-z-fs");

                  var requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                  };

                  fetch(`${ORIGIN}teams?sort=id&page=${page}&per_page=${perPage}`, requestOptions)
                        .then(response => response.json())
                        .then(result => setTeams(result))
                        .catch(error => console.log('error', error));
            }

            getTeamsData(1,100);
      }, []);

      return (
            <div className="teams">
                  <h1 className="teams-title">Les équipes</h1>
                  <div className="team-container">
                        {teams.length !== 0 ? teams.map(el=><TeamCard key={el.id} idTeam={el.id} name={el.name} imageUrl={el.image_url}/>) : "Loading"}
                        
                  </div>
                  
            </div>
      )
}