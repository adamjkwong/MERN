
import './App.css';
import axios from 'axios';
import PokemonInfo from './components/PokemonInfo';
import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router";

function App() {
  return(
    <div className="App">
        <Router>
            <ListOfDogsComponent path="/dogs" />
            <DetailDogComponent path="/dogs/:id" />
        </Router>
    </div>
)
}


export default App;