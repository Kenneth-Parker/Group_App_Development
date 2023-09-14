
import { useLocation } from "react-router-dom";

const RecipesPage = () => {
    const location = useLocation();
    const { recipe } = location.state || {};
  
    if (!recipe) {
      return <p>Recipe not found.</p>;
    }
  
    return (
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.instructions}</p>
      </div>
    );
  };

  export default RecipesPage