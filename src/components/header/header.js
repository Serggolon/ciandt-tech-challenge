import styled from "styled-components";

import ContainerBlockStyled from "../../commons/container-block";

function Header() {
  return <ContainerBlockStyled><HeaderStyled>Pokedex</HeaderStyled></ContainerBlockStyled>;
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-size: 4rem;
  color: burlywood;
  padding: 5px;
`;

export default Header;
