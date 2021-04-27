import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [Pokemon, setPokemon] = useState("");
// How do I iterate through the whole list of 807 Pokemon
// How would I pull a secondary attribute like "moves"
function renderPokemon () {
  if (Pokemon === "") {
    return ""
  } else {
    return Pokemon.map((P,i) => (
      <h1 key = {i} >Name: { P.name } URL: { P.url }</h1>
    )) 
  }
}

  const onClickHandler = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        console.log(response);
        response.json()
          // looking for a successful conversion of the response.body data into JSON
          .then((jsonDataResponse) => {
            console.log(jsonDataResponse);
            setPokemon(jsonDataResponse.results);
          })
          // looking for a failure to convert the response.body data into JSON
          .catch((jsonErrorResponse) => {
            console.log(jsonErrorResponse);
          });
      })
      // .catch is for the failure (rejected) cases as response from the asynchronous method call
      //    look for a failure from the API server
      .catch((errorResponse) => {
        console.log(errorResponse);
      });
  }
  //return, wait for the pokemon to come. 
  return (
    <div className="App">
      <h2>Using APIs</h2>
      <button onClick={ onClickHandler }>Fetch Pokemon</button>
      {
        renderPokemon()
      }
      <hr />
    </div>
  );
}


export default App;
