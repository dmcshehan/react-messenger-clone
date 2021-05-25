import React from "react";
import { useSelector } from "react-redux";

import db from "./firebase";

import MessageForm from "./Components/MessageForm";
import ChatHeader from "./Components/ChatHeader";
import MessageList from "./Components/MessageList";
import Wrapper from "./Components/Wrapper";

import { Redirect } from "react-router-dom";

import "./App.css";

function App() {
  const { user } = useSelector((state) => state.user);
  const loggedin = user ? true : false;

  return loggedin ? (
    <Wrapper>
      <ChatHeader />
      <MessageList />
      <MessageForm />
    </Wrapper>
  ) : (
    <Redirect to="/signin" />
  );
}

export default App;
