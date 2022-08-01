import styled from "styled-components";

const InputStyled = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  border: none;
  border-radius: 3px;
  background: rgba(255,239,213, 0.8);

`;

export default InputStyled;