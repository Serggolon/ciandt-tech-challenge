import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../header";
import PokemonPage from "../pages";

import ApiPokedex from "../../services";

const ApiPokedexContext = React.createContext();

const apiPokedexService = new ApiPokedex();

function App() {
  // const [pokemon, setPokemon] = useState({});

  // useEffect(() => {
  //   const dataPokemon = apiPokedexService.getPokemonsEntity(
  //     "https://pokeapi.co/api/v2/pokemon/2/"
  //   );
  //   //data.then((data) => console.log(data));
  //   dataPokemon.then((data) => {
  //     setPokemon(data);
  //     // console.log(data.abilities[0].ability.name);
  //     // console.log(data);
  //   });
  //   //const data = apiPokedexService.getAllPokemons('');
  // }, []);

  return (
    <ApiPokedexContext.Provider value={apiPokedexService}>
      <AppContainer>
        <Header/>
        <PokemonPage/>
        {/* <div>{pokemon.name}</div>
        <div>{pokemon.order}</div>
        {pokemon.abilities && pokemon.abilities.map((item, index) => <span key={index}> { item.ability.name } </span>)} */}
      </AppContainer>
    </ApiPokedexContext.Provider>
  );
}

const AppContainer = styled.div`
  width: 90%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export {App, ApiPokedexContext};
