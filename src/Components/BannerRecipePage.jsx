import React from "react";
import { Box, Text } from "@chakra-ui/react";

import BannerImg from "../Images/RecipePageImages/RecipePageBanner.jpeg";

const BannerRecipePage = () => {
  return (
    <Box
      bgImage={BannerImg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h={["240px", "250px", "265px", "280px"]}
    >
      <Text
        fontFamily="k2d200"
        color="white"
        textShadow="0 0 10px #000"
        textAlign="center"
        display="block"
        margin="auto"
        paddingTop={["135px", "125px", "105px", "90px"]}
        fontWeight="100"
        fontSize={["42px", "50px", "70px", "5.4rem"]}
      >
        Recipes
      </Text>
    </Box>
  );
};

export default BannerRecipePage;
