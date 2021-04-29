
import './App.css';
import axios from 'axios';
import PokemonInfo from './components/PokemonInfo';
import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router";

function App() {
return (
  <div className="App">
    <h1>Pokemon App!</h1>
      <PokemonInfo />
  </div>
)
}


export default App;
