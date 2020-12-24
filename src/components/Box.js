import React from 'react';

import './../Box.styles.css';

export const Box = props => (
  <div >
  <input id={props.type} value={props.value} className = {props.boxname} type="text" onChange={props.handleChange} />
  </div>
);

// <input className = 'input-box-guess' type="text" />