import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #7e2a0391;
color: #fff;
padding: 10px;
`;

export default function NavBar() {
  return (
    <>
      <StyledHeader>
        <h1>Ur Pantry Ur Way</h1>
      </StyledHeader>
    </>
  );
}
