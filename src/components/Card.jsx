import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Card = ({name, img, attack, hp, damage, movespeed, changeSkin, counterSkin}) => {

    return (
      
      <div className="card animate-bg">
        <h2>{name}</h2>
        {/* <h4>Title</h4>*/}

        <div className='card_img'>
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${counterSkin}.jpg`} alt="" />
        <button onClick={changeSkin}>Next Skin</button>
        </div>
        <div className='card_stats'>
        
          <h3 className='card_stats-info'>Attack: {attack} </h3>
          <h3 className='card_stats-info'>Hp: {hp}</h3>
          <h3 className='card_stats-info'>Damage: {damage}</h3>
          <h3 className='card_stats-info'>Move Speed: {movespeed} </h3>
        
        </div>
      </div>
    );
  };
  
  export default Card;   