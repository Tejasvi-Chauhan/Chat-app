import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer premium-bg">
    <div className="glass landingContent">
      <h1 className="title premium-title">
        Real-time Chat Application{" "}
        <span role="img" aria-label="chat">
          💬
        </span>
      </h1>
      <p className="subtitle premium-subtitle">
        Fast, secure real-time messaging built with
        <span> React</span>, <span>Node.js</span>, <span>Express</span> &{" "}
        <span>Socket.IO</span>
      </p>
      <p className="cta premium-cta">
        Start chatting instantly{" "}
        <span role="img" aria-label="arrow">
          ←
        </span>
      </p>
    </div>
    {users && users.length > 0 && (
      <div className="glass users-section">
        <h1 className="active-title">🟢 Active Users :</h1>
        <div className="activeContainer premium-users">
          {users.map(({ name }) => (
            <div key={name} className="activeItem premium-user">
              <span className="user-dot" />
              <span className="user-name">{name}</span>
              <img alt="Online Icon" src={onlineIcon} className="user-icon" />
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
