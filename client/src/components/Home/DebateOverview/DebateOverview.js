import React from 'react';
import "./DebateOverview.css"

const DebateOverview = ({ year }) => {
    const data = {
        "title": "2016 Debate #1",
        "host": "Hofstra University",
        "location": "Hempstead, NY",
        "date": "2016-09-26T16:00:00.000Z",
        "speakers": [
            { "speaker": "Donald Trump", "role": "Republican", "talk-time": 48, "PulpScore": 87 },
            { "speaker": "Hilary Clinton", "role": "Democratic", "talk-time": 42, "PulpScore": 68 },
            { "speaker": "Jim Holt", "role": "Moderator, CBS", "talk-time": 10, "PulpScore": 56 }
        ]
    };

    const { title, host, location, date, speakers } = data;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'EST' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

      return (
        <div className="debate-overview">
          <div className="debate-details">
            <h2>{title}</h2>
            <p><strong>Host:</strong> {host}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Date:</strong> {formatDate(date)}</p>
            {/* <p><strong>Time:</strong> 9:30–10:30PMEST</p> */}
          </div>
          <div className="speakers">
            <h3>Meet the Speakers</h3>
            <ul>
              {speakers.map((speaker, index) => (
                <li key={index}>
                  <p><strong>{speaker.speaker}</strong></p>
                  <p>{speaker.role}</p>
                  <img src={`/images/speaker${index + 1}.png`} alt={`${speaker.speaker}`} />
                </li>
              ))}
            </ul>
          </div>
          <div className="talk-time">
            <h3>Talk-time</h3>
            <ul>
              {speakers.map((speaker, index) => (
                <li key={index}>
                  <p><strong>{speaker.speaker.split(' ')[1]}</strong>: {speaker["talk-time"]}%</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pulp-score">
            <h3>Pulp Score™</h3>
            <ul>
              {speakers.map((speaker, index) => (
                <li key={index}>
                  <p><strong>{speaker.speaker.split(' ')[1]}</strong>: {speaker.PulpScore}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
export default DebateOverview;