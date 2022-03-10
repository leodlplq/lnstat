import React from "react";

import { addDays, addHours } from "../assets/helpers/date";

export default function Matches(){

      ///matches?range[begin_at]=2022-03-06T00:00:00,2022-03-06T23:59:59

      /**
       * 
       * TODO:
       * - get the current date ✅
       * - in order to get date for match✅
       *    - add 2 hours to the date --> first date ✅
       *    - add 5 days to the date + hours to 23:59:59 --> last date✅
       * - transform date into the good shape as : 2022-03-06T00:00:00✅
       */
      let currDate = new Date();
      let closeDate = new Date(addHours(currDate, 3))
      let farDate = new Date(addDays(currDate, 5).setHours(23, 59, 59, 999));

      console.log(currDate, closeDate.toISOString(), farDate.toISOString())




      return (
            <div className="matches">
                  <div className="match-choice">
                        <h1>Match</h1>
                        <div className="match-btn">
                              <button className="btn btn-past">Matchs passés</button>
                              <button className="btn btn-current">Matchs en cours</button>
                              <button className="btn btn-upcoming">Matchs à venir</button>
                        </div>
                  </div>

                  <div className="match-card">
                        <div className="left">
                              <span className="match-hour">18:00</span>
                              <span className="match-date">25/09</span>
                        </div>
                        <div className="separator"></div>
                        <div className="center">
                              <div className="team-logo-match">
                                    <img src="https://cdn.pandascore.co/images/team/image/19/unicorns-of-love.png"/>
                                    <img src="https://cdn.pandascore.co/images/team/image/19/unicorns-of-love.png"/>
                              </div>
                              <div className="team-name-match">
                                    <span>Unicorns</span>
                                    <span>Unicorns</span>
                              </div>
                        </div>
                        <div className="separator"></div>
                        <div className="right">
                              <button className="btn btn-bet">Miser</button>
                        </div>
                  </div>

            </div>
      )
}