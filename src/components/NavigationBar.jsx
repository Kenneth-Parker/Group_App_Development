import { Link } from "react-router-dom";
import headerPic from "../assets/UrIngredients.png"
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  color: goldenrod;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;


const NavigationBar = () => {

    return (
        <>
            <div className="headerImg" style={{backgroundImage:URL(headerPic)}}>
                <StyledNav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </StyledNav>
            </div>
        </>
    )

};

export default NavigationBar;