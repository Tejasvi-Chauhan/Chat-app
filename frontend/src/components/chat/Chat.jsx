import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

import Messages from "../Messages/Messages.jsx";
import TextContainer from "../TextContainer/TextContainer.jsx";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input.jsx";

import "./Chat.css";

const ENDPOINT = "http://localhost:5000";

let socket;

const Chat = () => {
  const location = useLocation();
  const { name: initialName, room: initialRoom } = queryString.parse(
    location.search,
  );
  const [name] = useState(initialName || "");
  const [room] = useState(initialRoom || "");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.emit('disconnect');
        socket.off();
        socket.close();
      }
    };
  }, [location.search, name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
