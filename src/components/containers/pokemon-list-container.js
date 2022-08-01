import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApiPokedexContext } from "../app";

import PokemonList from "../pokemon-list";

const PokemonListContainer = () => {
  const apiPokedex = useContext(ApiPokedexContext);

  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  const pokemonsFiltered = useSelector((state) => state.pokemonsFiltered);
  const pokemonUrl = useSelector((state) => state.pokemonUrl);
  const pokemonsCompareSecondUrl = useSelector((state) => state.pokemonsCompareSecondUrl);

  const changePokemonUrl = (url) => {
    dispatch({ type: "ADD_POKEMON_SEARCH_NAME", payload: "" });

    if (!pokemonUrl) {
      dispatch({ type: "ADD_POKEMON_DETAILS_URL", payload: url });
      return;
    }
    
    if (!pokemonsCompareSecondUrl) {
      dispatch({ type: "ADD_POKEMONS_COMPARE_SECOND_URL", payload: url });
      return;
    }

    if (pokemonUrl && pokemonsCompareSecondUrl) {
      dispatch({ type: "REMOVE_DETAILS", payload: url });
      return;
    }
  };

  const getPaginationPokemons = (prevNextParam) => {
    const dataPokemons = apiPokedex.getPokemonsEntity(prevNextParam);

    dataPokemons.then((data) => {
      dispatch({ type: "ADD_POKEMONS_LIST", payload: data });
    });
  };

  const handleNextButton = () => getPaginationPokemons(pokemons.next);

  const handlePrevButton = () => getPaginationPokemons(pokemons.previous);

  useEffect(() => {
    const dataPokemons = apiPokedex.getAllPokemons();

    dataPokemons.then((data) => {
      dispatch({ type: "ADD_POKEMONS_LIST", payload: data });
    });// eslint-disable-next-line
  }, []);

  return (
    <PokemonList
      changePokemonUrl={changePokemonUrl}
      pokemons={pokemonsFiltered.results.length ? pokemonsFiltered : pokemons}
      handleNextButton={handleNextButton}
      handlePrevButton={handlePrevButton}
      isPreviousButton={ pokemons.previous ? true : false}
      isNextButton={ pokemons.next ? true : false}
    />
  );
}

export default PokemonListContainer;
