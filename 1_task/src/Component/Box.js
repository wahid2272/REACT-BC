import React from 'react';

function Box(props) {
  return (
  <div className="boxes">
    <h3>{props.name}</h3>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
  </div>
  );
}

export default Box;