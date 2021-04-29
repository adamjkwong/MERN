import axios from 'axios';
import React, {useState, useEffect} from 'react';

const PokemonDetails = (props) => {
    const [pokemons, setPokemon] = useState({});

    useEffect(() => {

        axios.get(' https://pokeapi.co/api/v2/pokemon/' + props.pokemonId)
            .then((res) => {
            setPokemon(res.data);
            })
    
        
      }, []);
    return (
        <div>
            <h1>number: { pokemons.id } name: { pokemons.name }</h1>
            <h1>height: { pokemons.height } </h1>
            {/* How do I get the pokemon's TYPE here? */}
        </div>
    )
}

export default PokemonDetails;