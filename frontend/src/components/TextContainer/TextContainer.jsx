import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
   <div className="landingContent">
  <h1 className="title">
    Real-time Chat Application <span role="img" aria-label="chat">💬</span>
  </h1>

  <p className="subtitle">
    Fast, secure real-time messaging built with
    <span> React</span>, <span>Node.js</span>, <span>Express</span> & <span>Socket.IO</span>
  </p>

  <p className="cta">
    Start chatting instantly <span role="img" aria-label="arrow">←</span>
  </p>
</div>

    {
      users
        ? (
          <div>
            <h1>🟢 Active Users :</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;