import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #7e2a0391;
border: 2px solid teal;
color: #fff;
padding: 10px;

`;

const StyledH1 = styled.h1`

`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
`;






export default function NavBar() {
  return (
    <>
      <StyledHeader>

        <StyledH1>Ur Pantry Ur Way</StyledH1>

        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
