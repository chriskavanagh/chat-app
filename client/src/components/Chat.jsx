import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import queryString from "query-string";
import io from "socket.io-client";

const Outerdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

const Containerdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 60%;
  width: 35%;

  h1 {
    margin-top: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = `localhost:5000`;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {
      console.log(name, room);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // send message with Enter Key
  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
    console.log(message, messages);
  };

  return (
    <Outerdiv>
      <Containerdiv>
        <h1>Chat</h1>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/* <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
        /> */}
      </Containerdiv>
    </Outerdiv>
  );
};

export default Chat;
