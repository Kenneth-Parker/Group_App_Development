import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #cfa38e1e;
font-style: italic;
border: .44em outset teal;
color: #13b3e9e4;
padding: 10px;
`;

const StyledNav = styled.nav`
  border: 1px groove white;
  background-image: linear-gradient(80deg, rgba(235, 127, 127, 0.829), rgba(163, 101, 182, 0.577));
  background-clip: text;
  color: transparent;
`;

const HomeLink = styled(Link)`
  margin-right: 590px;
  text-decoration: none;
`;

const AboutLink = styled(Link)`
    margin-left: 440px;
  text-decoration: none;
`
const ContactLink = styled(Link)`
    text-decoration: none;
`



export default function NavBar() {
  return (
    <>
      <StyledHeader>
        <h1>Ur Pantry Ur Way</h1>
        <StyledNav>
          
          <HomeLink to="/">Home</HomeLink>
          <AboutLink to="/about">About</AboutLink>
          <ContactLink to="/about">Contact Us</ContactLink>

        </StyledNav>
      </StyledHeader>
    </>
  );
}

