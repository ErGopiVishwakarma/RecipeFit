import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const RecipesPage = () => {
  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return (
    <Box>
      <Text fontFamily="hind">Recipe</Text>
    </Box>
  );
};

export default RecipesPage;
