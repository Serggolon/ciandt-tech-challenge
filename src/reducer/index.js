const defaultState = {
  pokemons: { results: [] },
  pokemonUrl: "",
  pokemonDetails: {},
  pokemonSearchName: "",
  pokemonFilterPhrase: "",
  pokemonsFiltered: { results: [] },
  pokemonsCompareSecondUrl: "",
  pokemonsCompareSecondDetails: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POKEMON_DETAILS_URL":
      return { ...state, pokemonUrl: action.payload };

    case "ADD_POKEMONS_LIST":
      return { ...state, pokemons: action.payload };

    case "ADD_POKEMON_DETAILS":
      return { ...state, pokemonDetails: action.payload };

    case "ADD_POKEMON_SEARCH_NAME":
      return { ...state, pokemonSearchName: action.payload };

    case "ADD_POKEMON_FILTER_PHRASE":
      return { ...state, pokemonFilterPhrase: action.payload };

    case "ADD_POKEMONS_FILTERED":
      return { ...state, pokemonsFiltered: action.payload };

    case "ADD_POKEMONS_COMPARE_SECOND_URL":
      return { ...state, pokemonsCompareSecondUrl: action.payload };

    case "ADD_POKEMONS_COMPARE_SECOND_DETAILS":
      return { ...state, pokemonsCompareSecondDetails: action.payload };

    case "REMOVE_DETAILS":
      return {
        ...state,
        pokemonsCompareSecondUrl: "",
        pokemonUrl: "",
        pokemonDetails: {},
        pokemonsCompareSecondDetails: {},
      };

    default:
      return state;
  }
};

export default reducer;
