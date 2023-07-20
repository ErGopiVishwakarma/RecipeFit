import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import BannerRecipePage from "../Components/RecipesPage/BannerRecipePage";
import RecipePageSearch from "../Components/RecipesPage/RecipePageSearch";
import FilterRecipes from "../Components/RecipesPage/FilterRecipes";

const RecipesPage = () => {
  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return (
    <Box paddingBottom="800px" paddingTop={["65px", "75px", "85px"]}>
      {/* Top Banner */}
      <BannerRecipePage />

      {/* Search Bar */}
      <RecipePageSearch />

      {/* Filter */}
      <FilterRecipes />
    </Box>
  );
};

export default RecipesPage;
