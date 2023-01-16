import React from "react";
import './styleHeader.css'

const StyleHeader = (props) => {
    return(
        <h3 className="headerText">{props.text}</h3>
    )
}

export default StyleHeader;