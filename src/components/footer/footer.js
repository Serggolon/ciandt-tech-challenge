import styled from "styled-components";

import WrapperBlockStyled from "../../commons/wrapper-block";
import FooterStyled from "../styled-components/footer";

const Footer = () => {
  return (
    <FooterStyled>
      <WrapperFooterStyled>
        <FooterOneStyled>Pokedex Footer</FooterOneStyled>
      </WrapperFooterStyled>
    </FooterStyled>
  );
}

const WrapperFooterStyled = styled(WrapperBlockStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: burlywood;
  margin: 15px;
`;

const FooterOneStyled = styled.h1`
  padding: 15px;
`;

export default Footer;
