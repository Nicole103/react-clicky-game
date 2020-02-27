import React from "react";
import "./style.css";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-light">
      <h1 className="navbar-brand">Matching Game!</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          Current Score: {props.currentScore}
        </li>
        <li className="nav-item">
          Top Score: {props.topScore}
        </li>
        <li className="nav-item">
          Status: {props.messageUser}
        </li>
       
      </ul>
    </nav>
  );
}

export default NavTabs;