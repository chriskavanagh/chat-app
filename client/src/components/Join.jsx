import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Outerdiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

const Innerdiv = styled.div`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

const Input = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 20px;
  border-bottom: 2px solid white;
  margin-bottom: 30px;
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    outline: 0;
  }
`;

const Join = props => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Outerdiv>
      <Innerdiv>
        <H1>Join</H1>
        <div>
          <Input
            placeholder="Your Name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <Input
            style={{ marginTop: "20px" }}
            placeholder="Room"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type="submit">Sign In</Button>
        </Link>
      </Innerdiv>
    </Outerdiv>
  );
};

export default Join;
