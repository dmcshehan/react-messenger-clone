import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormControl, Input, IconButton, Container } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import db from "../../firebase";

import {
  messageForm,
  formControl,
  inputField,
} from "./MessageForm.module.scss";

function MessageForm() {
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages")
      .add({
        uid: user.uid,
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setInput("");
      });
  };

  return (
    <Container>
      <form onSubmit={sendMessage} className={messageForm}>
        <FormControl fullWidth className={formControl}>
          <Input
            className={inputField}
            placeholder="Enter a Message..."
            type="text"
            value={input}
            onChange={({ target }) => {
              setInput(target.value);
            }}
          />
          <IconButton
            aria-label="delete"
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </Container>
  );
}

export default MessageForm;
