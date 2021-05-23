import React from "react";

function index({ username }) {
  return (
    <div>
      <h1>Hello Clever Programmers 🚀 !</h1>
      <h2>Welcome {username ? username : "Unknown User"}</h2>
    </div>
  );
}

export default index;
