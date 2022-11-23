import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [champions,setChampion] = useState([])

  useEffect(()=>{
    const url="http://ddragon.leagueoflegends.com/cdn/12.22.1/data/es_ES/champion.json"
    axios.get(url)
      .then(res=>{
        const {data}=res.data
        const keysChampions=Object.keys(data)
        const championsFormat=keysChampions.map(champion=>({
          name:champion,
          img: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`,
          stats:data[champion].stats,
          
        }))
        
        
      setChampion(championsFormat)   
      })
      

  }, []) 

  return (
    <div className="App">

      <h1>League of legends Database</h1>

      <h2>{champions[3]?.name}</h2> 
      <img src={champions[3]?.img} alt="champion" />
      <button>clic aca para cambiar</button>
      

      
      
    </div>
  )
}

export default App
