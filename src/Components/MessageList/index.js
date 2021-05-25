import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlipMove from "react-flip-move";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from "../../firebase";

import Message from "../Message";

import { setAllMessages } from "../../store/messageSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: 64,
    bottom: 82,
    padding: 10,
    boxSizing: "border-box",
    height: "calc(100vh - 82px)",
    overflowY: "auto",
    position: "absolute",
    maxWidth: 800,
    width: "100%",
  },
}));

function MessageList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);

  console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        dispatch(
          setAllMessages(
            snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
          )
        );
      });
  }, []);

  return (
    <Paper className={classes.paper}>
      <FlipMove>
        {messages.map(({ data, id }) => (
          <Message key={id} username={user.displayName} message={data} />
        ))}
      </FlipMove>
    </Paper>
  );
}

export default MessageList;
