import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApiPokedexContext } from "../app";

import PokemonDetails from "../pokemon-details";

const PokemonDetailsContainer = ({ pokemonUrl, isPokemonUrl }) => {
  const dispatch = useDispatch();

  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const pokemonsCompareSecondDetails = useSelector((state) => state.pokemonsCompareSecondDetails);

  const apiPokedex = useContext(ApiPokedexContext);

  useEffect(() => {
    const dataPokemons = apiPokedex.getPokemonsEntity(pokemonUrl);

    dataPokemons.then((data) => {
      if (isPokemonUrl) {
        dispatch({ type: "ADD_POKEMON_DETAILS", payload: data });
      }

      if (!isPokemonUrl) {
        dispatch({ type: "ADD_POKEMONS_COMPARE_SECOND_DETAILS", payload: data });
      }
    });
  }, [apiPokedex, pokemonUrl, isPokemonUrl, dispatch]);

  return <PokemonDetails pokemonDetails={isPokemonUrl ? pokemonDetails : pokemonsCompareSecondDetails} />;
}

export default PokemonDetailsContainer;
