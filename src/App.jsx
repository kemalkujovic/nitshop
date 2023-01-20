import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import StyleButton from "./components/styleButton/styleButton";
import StyleHeader from "./components/styleHeader/styleHeader";
function App() {
  const [innerText, setInnerText] = useState("clicked");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);
  function buttonClick() {
    setClicked(!clicked);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyleHeader text="This is header" />
        <StyleButton onClickHandler={buttonClick} innerText={innerText} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
