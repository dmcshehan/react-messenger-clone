import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { cardContent, messageUser, messageCard } from "./Message.module.css";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

const Message = forwardRef(({ message }, ref) => {
  const { user, usernames } = useSelector((state) => state.user);

  const isUser = user.uid === message.uid;
  const classes = useStyles();

  return (
    <div ref={ref}>
      <Card
        variant="outlined"
        className={`${messageCard} ${isUser && messageUser}`}
      >
        <CardContent className={cardContent}>
          {!isUser && (
            <Typography className={classes.title}>
              {usernames.map((usernameObj) => {
                if (usernameObj.uid === message.uid) {
                  return usernameObj.username;
                }
              })}
            </Typography>
          )}
          <Typography component="p">{message.text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
