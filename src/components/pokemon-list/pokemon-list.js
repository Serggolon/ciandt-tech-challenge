import React from "react";
import styled from "styled-components";

import WrapperComponentStyled from "../../commons/wrapper-component";
import ContainerContentStyled from "../../commons/container-component";
import ButtonStyled from "../../commons/styled-button";

import PokemonListItem from "../pokemon-list-item";

const PokemonList = ({
  changePokemonUrl,
  pokemons,
  handlePrevButton,
  handleNextButton,
  isPreviousButton,
  isNextButton,
}) => {
  return (
    <ContainerPokemonListStyled>
      <WrapperPokemonListStyled>
        <WrapperPokemonNavigationStyled>
          <PokemonsTaskNameStyled>Pokemons List:</PokemonsTaskNameStyled>

          {isPreviousButton ? (
            <ButtonStyled onClick={handlePrevButton} active={true}>{"<"}</ButtonStyled>
          ) : <ButtonStyled onClick={handlePrevButton} active={false} disabled>{"<"}</ButtonStyled>}

          {isNextButton ? (
            <ButtonStyled onClick={handleNextButton} active={true}>{">"}</ButtonStyled>
          ) : <ButtonStyled onClick={handleNextButton} active={false} disabled>{">"}</ButtonStyled>}
        </WrapperPokemonNavigationStyled>

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
  max-width: 33%;
`;

const WrapperPokemonListStyled = styled(WrapperComponentStyled)`
  flex-direction: column;
  flex-wrap: nowrap;
  border: 2px solid grey;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
`;

const WrapperPokemonNavigationStyled = styled(WrapperComponentStyled)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
  margin: 5px;
`;

const PokemonsTaskNameStyled = styled.h3`
  font-size: 1.3rem;
  text-decoration: underline;
`;

const PokemonsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  height: 580px;
  overflow-y: scroll;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export default PokemonList;
