import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #173458;
border: 2px solid teal;
color: #ffffff;
padding: 10px;
border-radius: 22px;
`;

const StyledH1 = styled.h1`
overflow-wrap: break-word;
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  color: goldenrod;
`;



export default function NavBar() {
  return (
    <>
      <StyledHeader>

        <StyledH1>Ur Ingredients - Hour Recipes</StyledH1>

        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
