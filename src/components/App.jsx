import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedover, setMouseOver] = useState(false);
  function click() {
    setHeadingText("Submitted");
  }
  function over() {
    setMouseOver(true);
  }
  function out() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedover ? "black" : "white" }}
        onMouseOver={over}
        onMouseOut={out}
        onClick={click}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
