import React from "react";
import "./style.css";


const NavTab = (props) => (
  <nav className="navbar navbar-light">
    <h1 className="navbar-brand">Matching Game!</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        Score: {props.score}
      </li>
      <li className="nav-item">
        Top Score: {props.highScore}
      </li>
    </ul>
  </nav>
)

export default NavTab;
