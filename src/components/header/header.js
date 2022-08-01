import styled from "styled-components";

import WrapperBlockStyled from "../../commons/wrapper-block";
import HeaderStyled from "../styled-components/header";

const Header = () => {
  return (
    <HeaderStyled>
      <WrapperHeaderStyled>
        <HeaderOneStyled>Pokedex</HeaderOneStyled>
      </WrapperHeaderStyled>
    </HeaderStyled>
  );
}

const WrapperHeaderStyled = styled(WrapperBlockStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: burlywood;
  margin: 15px;
`;

const HeaderOneStyled = styled.h1`
  padding: 15px;
`;

export default Header;
