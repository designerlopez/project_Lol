import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [champion,setChampion] = useState({})

  useEffect(()=>{
    const url='http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json'
    axios.get(url)
      .then(({data})=>{
     setChampion(data.data)
      
      
      })
      .catch(err=>console.log(err))

  }, [])
  
  

  return (
    <div className="App">

      <h1>League of legends Database</h1>

     {/*   <h2>{champion.id}</h2> */}
     {/*  <img src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${champion?.id}.png`} alt="champion" /> */}

      {/* {champion.map((card, id)=>{
        return <Card key ={id} 
        title={card.id} 
        item1={card.id}
        tem2={card.id} 
        item3={card.id}
        
              /> ;
      })} */}





      
    </div>
  )
}

export default App
