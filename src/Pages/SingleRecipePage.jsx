import * as css from "../Styles/SingleRecipePageCss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import TempRecipeData from "../Functions/TempData";
import SingleRecipeDetails from "../Components/RecipesPage/SingleRecipeDetails";

const SingleRecipePage = () => {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState(TempRecipeData);
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    console.log(recipeData);
    document.title = `${recipeData.title} | RecipeSnap`;
  }, [recipeData]);

  useEffect(() => {
    filterRecipe();
  }, []);

  function filterRecipe() {
    let found = recipes?.filter((item, ind) => item._id == recipeID);
    setRecipeData((prev) => found[0]);
  }

  return (
    <Box
      marginBottom={"200px"}
      paddingBottom={["65px", "80px", "90px"]}
      paddingTop={["95px", "110px", "125px"]}
      //paddingTop={["65px", "75px", "85px"]}
    >
      {/* Recipe Details */}
      <SingleRecipeDetails recipeData={recipeData} />
    </Box>
  );
};

export default SingleRecipePage;
