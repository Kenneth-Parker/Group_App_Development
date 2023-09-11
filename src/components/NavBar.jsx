import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #7e2a0391;
border: 2px solid teal;
color: #fff;
padding: 10px;
`;

export default function NavBar() {
  return (
    <>
      <StyledHeader>
        <h1>Ur Pantry Ur Way</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
      </StyledHeader>
    </>
  );
}
