import React, { useState, useEffect } from "react";
import firebase from "firebase";

import MessageForm from "./Components/MessageForm";
import Header from "./Components/Header";
import MessageList from "./Components/MessageList";

import db from "./firebase";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages")
      .add({
        username,
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setInput("");
      });
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  return (
    <div className="App">
      <Header username={username} />
      <MessageList messages={messages} username={username} />
      <MessageForm
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;
