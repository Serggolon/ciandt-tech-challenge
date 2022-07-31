import { useState } from "react";
import styled from "styled-components";

import { PokemonListContainer, PokemonDetailsContainer } from "../containers";

import WrapperBlockStyled from "../../commons/wrapper-block";
import StyledMain from "../styled-components/main";


function PokemonPage() {
  const [pokemonUrl, setPokemonUrl] = useState("");

  const changePokemonUrl = (newPokemonUrl) => setPokemonUrl(newPokemonUrl);

  return (
    <StyledMain>
      <WrapperMainStyled>
        <PokemonListContainer changePokemonUrl={changePokemonUrl} />
        {pokemonUrl && <PokemonDetailsContainer pokemonUrl={pokemonUrl} />}
      </WrapperMainStyled>
    </StyledMain>
  );
}

const WrapperMainStyled = styled(WrapperBlockStyled)`
  flex-direction: row;
  flex-wrap: nowrap;
`;


export default PokemonPage;
