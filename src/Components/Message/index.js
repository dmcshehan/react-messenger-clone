import React, { forwardRef } from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import { cardContent, messageUser, messageCard } from "./Message.module.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref}>
      <Card
        variant="outlined"
        className={`${messageCard} ${isUser && messageUser}`}
      >
        <CardContent className={cardContent}>
          <Typography color="white" component="p">
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
