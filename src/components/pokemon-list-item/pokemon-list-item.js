import React from "react";
import styled from "styled-components";

import WrapperComponentStyled from "../../commons/wrapper-component";
import ContainerContentStyled from "../../commons/container-component";

const PokemonListItem = ({ changePokemonUrl, pokemon }) => {
  return (
    <ContainerPokemonListItemStyled>
      <WrapperPokemonListItemStyled>
        <PokemonsListItemStyled onClick={() => changePokemonUrl(pokemon.url)}>
          <WrapperPokemonNameStyled>
            <PokemonsNameStyled>{pokemon.name}</PokemonsNameStyled>
          </WrapperPokemonNameStyled>
        </PokemonsListItemStyled>
      </WrapperPokemonListItemStyled>
    </ContainerPokemonListItemStyled>
  );
}

const ContainerPokemonListItemStyled = styled(ContainerContentStyled)`
  width: 100%;
`;

const WrapperPokemonListItemStyled = styled(WrapperComponentStyled)`
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 5px;
`;

const PokemonsListItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 0.5rem;
  background: grey;
`;

const WrapperPokemonNameStyled = styled(WrapperComponentStyled)`
  margin: 5px;
`;

const PokemonsNameStyled = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default PokemonListItem;
