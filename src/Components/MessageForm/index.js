import React from "react";
import { Button, FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import {
  messageForm,
  formControl,
  inputField,
} from "./MessageForm.module.scss";

function MessageForm({ setInput, sendMessage, input }) {
  return (
    <form className="App__form" onSubmit={sendMessage} className={messageForm}>
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
  );
}

export default MessageForm;
