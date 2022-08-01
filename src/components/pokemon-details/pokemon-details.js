import React from "react";
import styled from "styled-components";

import ContainerComponentStyled from "../../commons/container-component";
import WrapperComponentStyled from "../../commons/wrapper-component";

const PokemonDetails = ({ pokemonDetails }) => {
  return (
    Object.keys(pokemonDetails).length && <ContainerPokemonDetailsCard>
      <WrapperPokemonDetailsCard>
        <PokemonCardName>{pokemonDetails.name}</PokemonCardName>

        <ContainerPokemonImage>
          <WrapperPokemonImage>
            <PokemonCardImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
              alt="Pokemon image"
            />
          </WrapperPokemonImage>
        </ContainerPokemonImage>

        <ContainerComponentStyled>
          <WrapperComponentStyled>
            <PokemonAbilitiesList>

              <PokemonAbilitiesListItem>
                {`Name: ${pokemonDetails.name}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Weight: ${pokemonDetails.weight}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Order: ${pokemonDetails.order}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Height: ${pokemonDetails.height}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`ID: ${pokemonDetails.id}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Default: ${pokemonDetails.is_default}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Species: ${pokemonDetails.species.name}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                {`Base experience: ${pokemonDetails.base_experience}`}
              </PokemonAbilitiesListItem>

              <PokemonAbilitiesListItem>
                <br/>
                <p>Stats:</p>
              </PokemonAbilitiesListItem>
              <PokemonSubList>
                {pokemonDetails.stats.map((item, index) => (
                  <PokemonSubListItem key={index}>
                    {`${item.stat.name}: ${item.base_stat}${item.effort ? (', effort '+item.effort) : ''}`}
                  </PokemonSubListItem>
                ))}
              </PokemonSubList>

              <PokemonAbilitiesListItem>
                <br/>
                <p>Abilities:</p>
              </PokemonAbilitiesListItem>

              <PokemonSubList>
                {pokemonDetails.abilities.map((item, index) => (
                  <PokemonSubListItem key={index}>
                    {`${item.ability.name}: slot-${item.slot}${item.is_hidden ? ", hidden" : ""}`}
                  </PokemonSubListItem>
                ))}
              </PokemonSubList>

            </PokemonAbilitiesList>
          </WrapperComponentStyled>
        </ContainerComponentStyled>

      </WrapperPokemonDetailsCard>
    </ContainerPokemonDetailsCard>
  );
}

const ContainerPokemonDetailsCard = styled(ContainerComponentStyled)`
  max-width: 33%;
`;

const WrapperPokemonDetailsCard = styled(WrapperComponentStyled)`
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.6);
  min-height: 637px;
`;

const PokemonCardName = styled.h3`
  padding: 5px;
  font-size: 2rem;
  text-align: center;
`;

const ContainerPokemonImage = styled(ContainerComponentStyled)`
  width: 100%;
`;

const WrapperPokemonImage = styled(WrapperComponentStyled)`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 0.5rem;
  background: white;
  max-height: 150px;
`;

const PokemonCardImage = styled.img`
  width: 100%;
  max-height: 125px;
`;

const PokemonAbilitiesList = styled.ul``;

const PokemonAbilitiesListItem = styled.li``;

const PokemonSubList = styled.ul`
  list-style: decimal;
`;

const PokemonSubListItem = styled.li`
  margin-left: 20px;
`;

export default PokemonDetails;
