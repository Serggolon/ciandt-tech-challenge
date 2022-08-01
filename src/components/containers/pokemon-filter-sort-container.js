import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApiPokedexContext } from "../app";

import PokemonSearchFilterPanel from "../pokemon-filter-sort";

const PokemonSearchFilterPanelContainer = () => {
  const apiPokedex = useContext(ApiPokedexContext);

  const dispatch = useDispatch();
  const pokemonSearchName = useSelector((state) => state.pokemonSearchName);
  const pokemonFilterPhrase = useSelector((state) => state.pokemonFilterPhrase);
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const pokemons = useSelector((state) => state.pokemons);
  
  const onSearchChange = (pokemonName) => {
    dispatch({ type: "ADD_POKEMON_SEARCH_NAME", payload: pokemonName.trim() });
  };

  const onFilterChange = (filterWord) => {
    dispatch({ type: "ADD_POKEMON_FILTER_PHRASE", payload: filterWord.trim() });
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const dataPokemon = apiPokedex.getPokemonByName(pokemonSearchName);

      dataPokemon.then((data) => {
        if (data.name && pokemonDetails?.name !== data.name) {
          dispatch({
            type: "ADD_POKEMON_DETAILS_URL",
            payload: `https://pokeapi.co/api/v2/pokemon/${pokemonSearchName}/`,
          });
        }
      });
    }, 1000);

    if (!pokemonSearchName || pokemonSearchName.length < 3) {
      clearTimeout(timeOutId);
    }

    return () => clearTimeout(timeOutId);
  }, [apiPokedex, pokemonSearchName, pokemonDetails.name, dispatch]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const pokemonsFiltered = {};

      pokemonsFiltered.results = pokemons.results.filter((item) => (item.name.indexOf(pokemonFilterPhrase) !== -1) );
      
      dispatch({ type: "ADD_POKEMONS_FILTERED", payload: pokemonsFiltered });
      
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, [pokemonFilterPhrase, pokemons.results, dispatch]);

  return (
    <PokemonSearchFilterPanel
      onSearchChange={onSearchChange}
      onFilterChange={onFilterChange}
      pokemonSearchName={pokemonSearchName}
      pokemonFilterPhrase={pokemonFilterPhrase}
    />
  );
};

export default PokemonSearchFilterPanelContainer;
