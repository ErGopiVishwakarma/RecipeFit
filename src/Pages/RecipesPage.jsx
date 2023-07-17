import React, { useEffect } from "react";

const RecipesPage = () => {
  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return <div>RecipesPage</div>;
};

export default RecipesPage;
