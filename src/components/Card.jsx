import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Card = ({champion}) => {


    return (
      
      <div className="card">
        <h3>{champion}</h3>
        <ul>
          <li>{champion}</li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
    );
  };
  
  export default Card;   