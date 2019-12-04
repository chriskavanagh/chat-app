import React, { useState, useEffect } from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import styled from "styled-components";

const Outerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

const Leftdiv = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;

  img {
    margin-right: 5%;
  }
`;

const Rightdiv = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;
const InfoBar = ({ room }) => {
  return (
    <Outerdiv>
      <Leftdiv>
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </Leftdiv>
      <Rightdiv>
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </Rightdiv>
    </Outerdiv>
  );
};

export default InfoBar;
