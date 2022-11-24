import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card'

import Navbar from './components/Navbar'

function App() {

  const [champions,setChampion] = useState([])
  
  const [counterSkins,setCounterSkins] = useState([])


  useEffect(()=>{
    const url="http://ddragon.leagueoflegends.com/cdn/12.22.1/data/es_ES/champion.json"
    axios.get(url)
      .then(res=>{
        const {data}=res.data
        console.log(data)
        const keysChampions=Object.keys(data)
        const championsFormat=keysChampions.map(champion=>({
          name:champion,
          img: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_1.jpg`,
          stats:data[champion].stats,
          info:data[champion].info,
          
        }))
      setChampion(championsFormat)   
      })
      

  }, []) 


  const changeSkin=()=>{
    setCounterSkins(counterSkins+1)
    console.log(counterSkins)
  }


  return (
    <div className="App">
      {/* <Navbar/> */}
      <h1>League of legends Database</h1>

      <Card
      name={champions[1]?.name} 
      img={champions[1]?.img}
      hp={champions[1]?.stats.hp}
      attack={champions[1]?.stats.hp}
      damage={champions[1]?.stats.hp}
      movespeed={champions[1]?.stats.hp}
      />
        <h2>{champions[1]?.name}</h2> 
      <img src={champions[1]?.img} alt="champion" />
      <button onClick={changeSkin}>clic aca para cambiar campeon</button>
      <h3> Health: {champions[1]?.stats.hp}</h3>
      <h3> Armadura: {champions[1]?.stats.armor}</h3>
      <h3> Damage: {champions[1]?.stats.attackdamage}</h3>
      <h3> Move Speed: {champions[1]?.stats.movespeed}</h3>    
      
      
    

      
      
    </div>
  )
}

export default App
