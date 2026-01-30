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
    location.search
  );

  const [name] = useState(initialName || "");
  const [room] = useState(initialRoom || "");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 🔹 SOCKET CONNECTION + JOIN
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [name, room]);

  // 🔹 MESSAGE & ROOM LISTENERS
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off("message");
      socket.off("roomData");
    };
  }, []);

  // 🔹 SEND MESSAGE
  const sendMessage = (event) => {
    event.preventDefault();

    if (message.trim()) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
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
