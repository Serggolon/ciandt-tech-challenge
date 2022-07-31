import { useState, useContext, useEffect } from "react";

import { ApiPokedexContext } from "../app";

import PokemonDetails from "../pokemon-details";


function PokemonDetailsContainer({ pokemonUrl }) {
  const [pokemonDetails, setPokemonDeteails] = useState({});

  const apiPokedex = useContext(ApiPokedexContext);

  useEffect(() => {
    const dataPokemons = apiPokedex.getPokemonsEntity(pokemonUrl);

    dataPokemons.then((data) => {   
      // const getNormilizedPokemonStats = (data) => {
      //   const resultObject = {
      //     name: data.name,
      //     weight: data.weight,
      //     order: data.order,
      //     height: data.height,
      //     id: data.id,
      //     default: data.is_default,
      //     species: data.species.name,
      //     base_experience: data.base_experience
      //   };

      //   data.sats.forEach((stat) => {
      //     resultObject[stat.stat.name] = stat.base_stat;
      //   });

      //   data.sats.forEach((stat) => {
      //     resultObject[stat.stat.name] = stat.base_stat;
      //   });

      //   return resultObject;
      // }; 
      console.log('data', data);
      console.log('pokemonUrl', pokemonUrl);
      setPokemonDeteails(data);

       
    });
  }, [apiPokedex, pokemonUrl]);

  return <PokemonDetails pokemonDetails={pokemonDetails}/>;
}

export default PokemonDetailsContainer;
