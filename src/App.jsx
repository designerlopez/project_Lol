import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card'

import Navbar from './components/Navbar'

function App() {

  const [champions,setChampion] = useState([])
  
  const [counterChampion,setCounterChampion] = useState(0)

  const[counterSkin, setCounterSkin]=useState(0)


  useEffect(()=>{
    const url="http://ddragon.leagueoflegends.com/cdn/12.22.1/data/es_ES/champion.json"
    axios.get(url)
      .then(res=>{
        const {data}=res.data
        /* console.log(data) */
        const keysChampions=Object.keys(data)
        const championsFormat=keysChampions.map(champion=>({
          name:champion,
          img: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_${counterSkin}.jpg`,
          stats:data[champion].stats,
          info:data[champion].info,
          
        }))
      setChampion(championsFormat)
      /* console.log(championsFormat)    */
      })
      

  }, []) 

  console.log(champions)

  const changeSkin=()=>{
    if(champions[counterChampion].img){
      setCounterSkin(counterSkin+1) 
    }else if(!champions[counterChampion].img){
      setCounterSkin(0)
    }
    
    
  }

  const changeChampion=()=>{
    setCounterSkin(0)
if(counterChampion<=161){
  setCounterChampion(counterChampion+1)
  
}else if(counterChampion>161){
  setCounterChampion(0)
}    
  }


const changeChampionBack=()=>{
    setCounterSkin(0)
if(counterChampion>=1){
  setCounterChampion(counterChampion-1)
  
}else if(counterChampion<= 0){
  setCounterChampion(161)
}    
  }

  
  


  return (
    <div className="App">
      {/* <Navbar/> */}
      <h1>League of legends Database</h1>

      <Card
      name={champions[counterChampion]?.name} 
      img={champions[counterChampion]?.img}
      hp={champions[counterChampion]?.stats.hp}
      attack={champions[counterChampion]?.stats.hp}
      damage={champions[counterChampion]?.stats.hp}
      movespeed={champions[counterChampion]?.stats.hp}
      changeSkin={changeSkin}
      counterSkin={counterSkin}
      />
      <button className='btn_Next-Champ' onClick={changeChampion}>Next</button>

      
      <button className='btn_Back-Champ' onClick={changeChampionBack}>Back</button>

       {/*  <h2>{champions[1]?.name}</h2> 
      <img src={champions[1]?.img} alt="champion" />
      <button onClick={changeSkin}>clic aca para cambiar campeon</button>
      <h3> Health: {champions[1]?.stats.hp}</h3>
      <h3> Armadura: {champions[1]?.stats.armor}</h3>
      <h3> Damage: {champions[1]?.stats.attackdamage}</h3>
      <h3> Move Speed: {champions[1]?.stats.movespeed}</h3>    
      
       */}
    

      
      
    </div>
  )
}

export default App
