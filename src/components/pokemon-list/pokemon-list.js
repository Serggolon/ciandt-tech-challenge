import React from "react";
import styled from "styled-components";

import WrapperComponentStyled from "../../commons/wrapper-component";
import ContainerContentStyled from "../../commons/container-component";

import PokemonListItem from "../pokemon-list-item";

function PokemonList({ changePokemonUrl, pokemons }) {
  return (
    <ContainerPokemonListStyled>
      <WrapperPokemonListStyled>
        <PokemonsTaskNameStyled>Pokemons List:</PokemonsTaskNameStyled>
        <PokemonsListStyled>
          {pokemons.results.map((item, index) => (
            <PokemonListItem
              key={index}
              changePokemonUrl={changePokemonUrl}
              pokemon={item}
            />
          ))}
        </PokemonsListStyled>
      </WrapperPokemonListStyled>
    </ContainerPokemonListStyled>
  );
}

const ContainerPokemonListStyled = styled(ContainerContentStyled)`
  width: 30%;
`;

const WrapperPokemonListStyled = styled(WrapperComponentStyled)`
  flex-direction: column;
  flex-wrap: nowrap;
  border: 2px solid grey;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
`;

const PokemonsTaskNameStyled = styled.h3`
  padding: 5px;
  font-size: 1.5rem;
  text-decoration: underline;
`;

const PokemonsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 550px;
  overflow-y: scroll;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export default PokemonList;
