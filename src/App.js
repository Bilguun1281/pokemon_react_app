
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data,setData] = useState();
  const [name,setName] = useState();
  const [weight,setWeight] = useState();
  const [number,setNumber] = useState(1);

const  URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

  useEffect(() => {
    if(!number) return;
    axios.get(URL).then((response) => {
     console.log(response.data )
      setData(response.data);
      setName(response.data.name)
      setWeight(response.data.weight)
    }).catch((err) => {
      window.alert(err);
    })
  },[number]);


  return (
    <div className="App">
     <h1>Pokemon</h1>
     <input type={"number"} onChange={(e) =>{ setNumber(e.target.value)}}/>
     <button>Show</button>
     <h2>Name : {name}</h2>
     <h3 >Weight : {weight}</h3>
     <img src={data  ? data.sprites.other.dream_world.front_default :"<p>Loading</p>"} alt="" />
      <p>My abilities are:</p>
      {data ? data.abilities.map((value,key) => {
        return(
          <div key={key}>
            {value.ability.name}
          </div>
        ) 
      }):""}
    </div>
  );
}
export default App;
