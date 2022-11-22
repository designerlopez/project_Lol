import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Card = ({title, item1, item2, item3, item4}) => {

 
    return (
      
      <div className="card">
        <h3>{title}</h3>
        <ul>
          <li>{item1}</li>
          <li>{item2} </li>
          <li>{item3} </li>
          <li>{item4} </li>
        </ul>
      </div>
    );
  };
  
  export default Card;   