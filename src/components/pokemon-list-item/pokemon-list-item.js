import React from "react";
import styled from "styled-components";

import WrapperComponentStyled from "../../commons/wrapper-component";
import ContainerContentStyled from "../../commons/container-component";

function PokemonListItem({ changePokemonUrl, pokemon }) {
  return (
    <ContainerPokemonListItemStyled>
      <WrapperPokemonListItemStyled>
        <PokemonsListItemStyled onClick={() => changePokemonUrl(pokemon.url)}>
          <PokemonsNameStyled>{pokemon.name}</PokemonsNameStyled>
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

const PokemonsNameStyled = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export default PokemonListItem;
