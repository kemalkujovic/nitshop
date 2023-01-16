import React from "react";
import "./styleButton.css";
const StyleButton = (props) => {
  var ButtonText = "Click me";
  function buttonHandler() {
    console.log('clicked')
    ButtonText = "CLICKED!";
    return ButtonText;
  }
  return (
    <button className="styleButton" onClick={() => buttonHandler()}>
      {props.innerText}
    </button>
  );
};

export default StyleButton;
