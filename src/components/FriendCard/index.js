import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={()=> props.checkClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Place:</strong> {props.place}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
