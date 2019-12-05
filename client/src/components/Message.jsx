import React from "react";
import styled from "styled-components";
import ReactEmoji from "react-emoji";

const MsgContainer = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;

  .justifyStart {
    justify-content: flex-start;
  }

  .justifyEnd {
    justify-content: flex-end;
  }
`;

const MsgBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;

  .backgroundBlue {
    background: #2979ff;
  }

  .backgroundLight {
    background: #f3f3f3;
  }
`;

const MsgText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }

  .colorWhite {
    color: white;
  }

  .colorDark {
    color: #353535;
  }
`;

const SentText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;

  .pl-10 {
    padding-left: 10px;
  }

  .pr-10 {
    padding-right: 10px;
  }
`;

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
