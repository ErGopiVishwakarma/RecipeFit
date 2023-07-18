import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import BannerRecipePage from "../Components/BannerRecipePage";
import RecipePageSearch from "../Components/RecipePageSearch";

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
    </Box>
  );
};

export default RecipesPage;
