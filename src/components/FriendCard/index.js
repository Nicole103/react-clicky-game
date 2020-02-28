import React from "react";
import "./style.css";

const onClick = (props) => {
	props.shuffledrivers();
	props.checkClick(props.id);
}

const DriverCard = (props) => (
    <div className="card">
      <div className="img-container">
      <a className="thumbnail" onClick={() => onClick(props)}>
        <img src={props.image} />
      </a>
      </div>
 </div>
)

export default DriverCard