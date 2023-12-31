import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLi = styled.ul`
  text-decoration: none ;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const StyledDiv = styled.div`
  border: 2px solid black;
border-radius: 22px;
width: auto;
`;
const StyledGrid = styled.div`
  display: contain;
  gap: 14px; 
  `;

const EdamamList = ({ selectedItems, numberOfResultsShown }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_VAR2;
    const query = selectedItems.join(",");
    const appID = import.meta.env.VITE_REACT_VAR2_ID;
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appID}&app_key=${apiKey}&to=${numberOfResultsShown}`;

    setLoading(true);

    if (selectedItems.length === 0) {
      setRecipes([]);
      setLoading(false);
      return;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network didn't return your response");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.hits);
        setLoading(false);
        console.log("Received recipes data:", data.hits);
      })
      .catch((error) => {
        console.log("There's an err with fetching data:", error);
        setLoading(false);
    });
  }, [selectedItems, numberOfResultsShown]);

  const renderRecipes = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (recipes.length === 0) {
      return <p>No recipes found for selected items.</p>;
    } else {

      return (
        <StyledGrid>
          {recipes.map((recipe, index) => (
            <StyledLi key={`${recipe.recipe.label}-${index}`}>
              <h4>{recipe.recipe.label}</h4>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <a href={recipe.recipe.url}>
                <br />
                Recipe Instructions for {recipe.recipe.label}
              </a>
            </StyledLi>
          ))}
        </StyledGrid>
      );
    }
  };

  console.log("EdamamList component rendered");

  return (
    <StyledDiv>
      <h4>More recipes based on selected pantry items:</h4>
      {renderRecipes()}
    </StyledDiv>
  );
};

export default EdamamList;