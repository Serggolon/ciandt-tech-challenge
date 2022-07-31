import styled from "styled-components";

const Link = ({ href, children }) => (
    <a href = {href} >
      {children}
    </a>
  );
  
const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

export default StyledLink;
