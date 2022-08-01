import React from "react";
import styled from "styled-components";

import ContainerComponentStyled from "../../commons/container-component";
import WrapperComponentStyled from "../../commons/wrapper-component";
import InputStyled from "../../commons/styled-input";

const PokemonSearchFilterPanel = ({
  onSearchChange,
  onFilterChange,
  pokemonSearchName,
  pokemonFilterPhrase,
}) => {
  return (
    <ContainerComponentStyled>
      <WrapperFormLabelStyled>
        <FormStyled>
          <WrapperFormLabelStyled>
            <FormLabelStyled>
              Input pokemon name here:
              <InputStyled
                type="text"
                placeholder="name"
                value={pokemonSearchName}
                onChange={(event) => onSearchChange(event.target.value)}
              ></InputStyled>
            </FormLabelStyled>
          </WrapperFormLabelStyled>

          <WrapperFormLabelStyled>
            <FormLabelStyled>
              Input filter by name phrase here:
              <InputStyled
                type="text"
                placeholder="phrase"
                value={pokemonFilterPhrase}
                onChange={(event) => onFilterChange(event.target.value)}
              ></InputStyled>
            </FormLabelStyled>
          </WrapperFormLabelStyled>
        </FormStyled>
      </WrapperFormLabelStyled>
    </ContainerComponentStyled>
  );
};

const WrapperFormLabelStyled = styled(WrapperComponentStyled)`
  margin: 5px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FormLabelStyled = styled.label`
  padding-right: 5px;
  font-size: 0.9rem;
`;

export default PokemonSearchFilterPanel;
