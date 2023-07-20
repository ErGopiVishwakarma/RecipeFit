import * as css from "../../Styles/AllRecipesBoxCss";
import React, { useState } from "react";
import { Box, Text, Center, Button } from "@chakra-ui/react";

import TempRecipeData from "../../Functions/TempData";
import RecipeCard from "./RecipeCard";

const AllRecipesBox = () => {
  const [recipeData, setRecipeData] = useState(TempRecipeData);

  return (
    <Box css={css.OuterCont}>
      {/* Recipes Container */}
      <Box css={css.RecipeCardsHolder}>
        {/* Recipe Card */}
        {recipeData?.map((item, ind) => (
          <RecipeCard key={item._id} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default AllRecipesBox;
