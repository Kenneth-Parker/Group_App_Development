import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLi = styled.ul`
  text-decoration: none ;
  img {
    max-width: 100%;
    height: auto;
  }
`;

// rendered recipes
const StyledDiv = styled.div`
 display: grid;
border: 2px solid grey;
border-radius: 22px;
background-color: #54dbc09a;

`;

// photo obj
// const StyledGrid = styled.div`

//   display: contain;
//   gap: 20px; 

//   `;

const PantryList = ({ selectedItems }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKeyx = import.meta.env.VITE_REACT_APP_XSPOON_API_KEY;
    const query = selectedItems.join(",");
    const apiKey = import.meta.env.VITE_REACT_VAR;

    setLoading(true);

    // Check if there are selected ingredients
    if (selectedItems.length === 0) {
      setRecipes([]);
      setLoading(false);
      return;
    }

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.results);
        setLoading(false);
        console.log("Received recipes data:", data.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [selectedItems]);

  // const renderRecipes = () => {
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   } else if (recipes.length === 0) {
  //     return <p>No recipes found for selected items.</p>;
  //   } else {
  //     return (
  //       <StyledGrid>
  //         {recipes.map((recipe) => (
  //           <StyledLi key={recipe.id}>
  //             <h4>{recipe.title}</h4>
  //             <img src={recipe.image} alt={recipe.title} />
  //             <a href={recipe.sourceUrl}>
  //               <br />
  //               Recipe Instructions for {recipe.title}
  //             </a>
  //           </StyledLi>
  //         ))}
  //       </StyledGrid>
  //     );
  //   }
  // };

  console.log("PantryList component rendered");

  return (
    <>
      <div>
        <StyledDiv>
       
          <h4>Recipes based on selected pantry items:</h4>
          {/*state of loading - but it's initially false */}

          {loading ? 
          (
            <p>Loading...</p>
          ) : recipes.length === 0 ? (
            <p>No recipes found for selected items.</p>
          ) : 
          (
            // <StyledGrid>
            <div>

              {recipes.map((recipe) => 
              (
                <StyledLi key={recipe.id}>
                  <h4>{recipe.title}</h4>
                  <img src={recipe.image} alt={recipe.title} />
{/* gave it a name _ */}
                  <Link to={ `/recipe/${recipe.id}` }>
                    Recipe Instructions for {recipe.title}
                  </Link>

                </StyledLi>
              )
              )}
</div>
            // </StyledGrid>
          )}

        </StyledDiv>
        <br />

        {/* {recipes.length > 0 && <Link to="/recipe">View Recipes</Link>} */}
      </div>
    </>
  );
};

export default PantryList;
