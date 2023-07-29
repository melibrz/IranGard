import React from 'react';
import '../Styles/arrow.css';

export const Left = props => {
  const { style, onClick } = props;
  return (
    <div
      className="left-arrow"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
            <img src={require("../../src/Components/Images/left.png")} style={{padding:"5px"}}/>
    </div>
  );
};

export const Right = props => {
  const { style, onClick } = props;
  return (
    <div
      className="right-arrow"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img src={require("../../src/Components/Images/right.png")} style={{padding:"5px"}}/>
    </div>
  );
};
