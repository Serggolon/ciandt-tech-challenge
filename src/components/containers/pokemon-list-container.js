import { useState, useContext, useEffect } from "react";

import { ApiPokedexContext } from "../app";

import PokemonList from "../pokemon-list";


function PokemonListContainer({changePokemonUrl}) {
  const [pokemons, setPokemons] = useState({results : []});
  const apiPokedex = useContext(ApiPokedexContext);

  useEffect(() => {
    const dataPokemons = apiPokedex.getAllPokemons();

    dataPokemons.then((data) => {     
      setPokemons(data);
    });
  }, [apiPokedex]);

  return <PokemonList changePokemonUrl={changePokemonUrl} pokemons={pokemons}/>;
}

export default PokemonListContainer;
