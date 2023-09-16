import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #173458;
border: 2px solid teal;
color: #ffffff;
padding: 10px;
border-radius: 22px;
max-width: 100%;
max-height: 100%;
`;

const StyledH1 = styled.h1`
overflow-wrap: break-word;
background: linear-gradient(
90deg,
#094579 14%,
#06aa7ee9 65%,
#eef51ea8 85%
);
background-clip: text;
-text-fill-color: transparent;
border-radius: 7px;
margin:17px 0px 9px 0px;
  /* max-width: max-content; */
`;
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
        <StyledH1>Ur Ingredients - ⏳our Recipes</StyledH1>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
