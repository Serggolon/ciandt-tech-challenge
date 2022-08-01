import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  PokemonListContainer,
  PokemonDetailsContainer,
  PokemonSearchFilterPanelContainer,
} from "../containers";

import ContainerComponentStyled from "../../commons/container-component";
import WrapperBlockStyled from "../../commons/wrapper-block";
import StyledMain from "../styled-components/main";

const PokemonPage = () => {
  const pokemonUrl = useSelector((state) => state.pokemonUrl);
  const pokemonsCompareSecondUrl = useSelector((state) => state.pokemonsCompareSecondUrl);
  

  return (
    <StyledMain>
      <WrapperMainStyled>
        <PokemonSearchFilterPanelContainer />

        <ContainerComponentStyled>
          <WrapperListDetailsStyled>
            <PokemonListContainer />
            {pokemonUrl && <PokemonDetailsContainer pokemonUrl={pokemonUrl} isPokemonUrl/>}
            {pokemonsCompareSecondUrl && <PokemonDetailsContainer pokemonUrl={pokemonsCompareSecondUrl}/>}
          </WrapperListDetailsStyled>
        </ContainerComponentStyled>

      </WrapperMainStyled>
    </StyledMain>
  );
}

const WrapperMainStyled = styled(WrapperBlockStyled)`
  flex-direction: column;
  flex-wrap: nowrap;
`;

const WrapperListDetailsStyled = styled(WrapperBlockStyled)`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default PokemonPage;
