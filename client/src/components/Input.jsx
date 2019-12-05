import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const MsgInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;

  :focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

const Input = ({ setMessage, sendMessage, message }) => (
  <Form className="form">
    <MsgInput
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <Button className="sendButton" onClick={e => sendMessage(e)}>
      Send
    </Button>
  </Form>
);

export default Input;
