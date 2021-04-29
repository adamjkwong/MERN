import React, { useEffect, useState } from 'react';
// be sure to npm install the axios library so we can import and use it
import axios from 'axios';

function App() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
    
  }, []);  
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemons.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;