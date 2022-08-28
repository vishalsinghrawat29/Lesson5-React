import React, { useState } from "react";
import "./styles.css";

var userName = "Vishal";
// var userName = prompt("Give me your username");
var color = "blue";
// var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function likeHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }
  console.log("likeCounter", likeCounter);

  return (
    <div className="App">
      <h1>
        Welcome: <span style={{ color: color }}>{userName}</span>
      </h1>
      <button onClick={likeHandler}> Like Me! </button> {likeCounter}
    </div>
  );
}
