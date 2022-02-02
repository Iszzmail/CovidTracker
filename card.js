import React from "react";
import "./style.css";

function Card(props) {
 


  return (
    <div className="button">
      <div className="cases">
        <div>{props.name}</div>
        <img
          style={{ height: "40px" }}
          src="https://covid19.karnataka.gov.in/assets/page-1.svg"
        ></img>
      </div>
      <div>{props.total}</div>
     
    </div>
  );
}

export default Card;
