import styled from "styled-components";

const ButtonStyled = styled.button`
  display: inline-block;
  color: ${(props) => props.active ? 'black' : 'gray'};
  font-size: 1em;
  margin: 0.2em;
  padding: 0.2em;
  border: 2px solid ${(props) => props.active ? 'black' : 'gray'};
  border-radius: 3px;
  display: block;
  background: ${(props) => props.active ? 'none' : 'white'};
`;

export default ButtonStyled;
