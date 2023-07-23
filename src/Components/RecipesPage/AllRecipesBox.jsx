import * as css from "../../Styles/AllRecipesBoxCss";
import React, { useEffect, useState, useContext } from "react";
import { Box, Text, Center, Button, Image } from "@chakra-ui/react";

import RecipeCard from "./RecipeCard";
import LoadingComponent from "./LoadingComponent";
import { Context } from "../../Redux/Context";

const AllRecipesBox = ({ page }) => {
  const { isLoading, recipes } = useContext(Context);

  return (
    <Box css={css.OuterCont}>
      {/* Recipes Container */}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <Box css={css.RecipeCardsHolder}>
          {/* Recipe Card */}
          {recipes?.map((item, ind) => (
            <RecipeCard key={item._id} {...item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AllRecipesBox;
