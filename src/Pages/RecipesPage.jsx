import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";

import BannerRecipePage from "../Components/RecipesPage/BannerRecipePage";
import RecipePageSearch from "../Components/RecipesPage/RecipePageSearch";
import FilterRecipes from "../Components/RecipesPage/FilterRecipes";
import AllRecipesBox from "../Components/RecipesPage/AllRecipesBox";
import Pagination from "../Components/RecipesPage/Pagination";

const RecipesPage = () => {
  const dipatch = useDispatch();
  const Loading = useSelector((state) => state.RecipeReducer.isLoading);
  const Error = useSelector((state) => state.RecipeReducer.isError);
  const TotalPages = useSelector((state) => state.RecipeReducer.totalPages);
  const Data = useSelector((state) => state.RecipeReducer.recipes);

  useEffect(() => {}, [Data]);

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
