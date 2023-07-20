import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import BannerRecipePage from "../Components/RecipesPage/BannerRecipePage";
import RecipePageSearch from "../Components/RecipesPage/RecipePageSearch";
import FilterRecipes from "../Components/RecipesPage/FilterRecipes";
import AllRecipesBox from "../Components/RecipesPage/AllRecipesBox";
import Pagination from "../Components/RecipesPage/Pagination";

const RecipesPage = () => {
  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return (
    <Box
      paddingBottom={["65px", "80px", "90px"]}
      paddingTop={["65px", "75px", "85px"]}
    >
      {/* Top Banner */}
      <BannerRecipePage />

      {/* Search Bar */}
      <RecipePageSearch />

      {/* Filter */}
      <FilterRecipes />

      {/* All Recipes Box */}
      <AllRecipesBox />

      {/* Pagination */}
      <Pagination />
    </Box>
  );
};

export default RecipesPage;
