import React from 'react';
import './WinnerList.styles.css';

export const WinnerList = props => (
  
  <div className='winner-list-container'>

  {props.people.map( (person,i) => (
    
      <p key={person.id}> {i+1}) {person.name}: {person.value}</p>
     
  ))}
  </div>

); 