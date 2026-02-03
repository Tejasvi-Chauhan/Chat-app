import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
   <div className="landingText">
  <h1>
    Realtime Chat Application <span role="img" aria-label="chat">💬</span>
  </h1>

  <p className="subtitle">
    Built with React, Express, Node.js & Socket.IO
  </p>

  <p className="cta">
     <span role="img" aria-label="arrow"></span>
  </p>
</div>

    {
      users
        ? (
          <div>
            <h1>Active Users :</h1>
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