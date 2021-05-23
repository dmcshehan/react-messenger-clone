import React from "react";
import FlipMove from "react-flip-move";

import Message from "../Message";

import { list } from "./MessageList.module.css";

function MessageList({ messages, username }) {
  return (
    <FlipMove className={list}>
      {messages.map(({ data, id }) => (
        <Message key={id} username={username} message={data} />
      ))}
    </FlipMove>
  );
}

export default MessageList;
