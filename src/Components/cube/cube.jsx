import React from 'react';
import "../../Styles/cube.css";

function Cube() {
  return (
    <div className="cube">
      <div className="front">
        <img src={require("../Images/sliderpic7.jpg")} width="280px" height="280px"/>
      </div>
      <div className="back">
        <img src={require("../Images/sliderpic2.jpg")} width="280px" height="280px"/>
      </div>
      <div className="top">
        <img src={require("../Images/silderpic3.jpg")} width="280px" height="280px"/>
      </div>
      <div className="bottom">
        <img src={require("../Images/sliderpic4.jpg")} width="280px" height="280px"/>
      </div>
      <div className="left">
        <img src={require("../Images/sliderpic5.jpg")} width="280px" height="280px"/>
      </div>
      <div className="right">
        <img src={require("../Images/sliderpic6.jpg")} width="280px" height="280px"/>
      </div>
    </div>
  );
}

export default Cube;
