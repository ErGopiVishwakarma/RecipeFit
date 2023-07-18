import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import BannerImg from "../Images/RecipePageImages/RecipePageBanner.jpeg";
import RecipePageSearch from "../Components/RecipePageSearch";

const RecipesPage = () => {
  useEffect(() => {
    document.title = "Recipes | RecipeSnap";
  }, []);

  return (
    <Box h="800px">
      {/* Top Banner */}
      <Box
        bgImage={BannerImg}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={"330px"}
        mt={["25px", "25px", "25px"]}
      >
        <Text
          fontFamily="k2d"
          color="white"
          textShadow="0 0 10px #000"
          //mb="0.5rem"
          lineHeight="1.2"
          fontWeight="300"
          fontSize="5.4rem"
        >
          Recipes
        </Text>
      </Box>

      {/* Search Bar */}
      <RecipePageSearch />
    </Box>
  );
};

export default RecipesPage;
