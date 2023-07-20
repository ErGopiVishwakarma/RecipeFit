import * as css from "../../Styles/AllRecipesBoxCss";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";

const RecipeCard = ({ _id, title, time, category, img }) => {
  return (
    <Link to={`/recipe/${_id}`} className="RecipeCardOuter">
      <Box css={css.RecipeCardImgBox}>
        <Image src={img} css={css.RecipeCardImg} />
      </Box>
      <Text css={css.RecipeNameCss} fontFamily="cotorisb">
        {title}
      </Text>
      <Box css={css.BadgeCont}>
        <Box bg="greenbtn" fontFamily="inter" css={css.TimeBadge}>
          <Image as={FiClock} css={css.TimeIcon} />
          {time}
        </Box>
        <Box fontFamily="inter" bg="redbtn" css={css.CateBadge}>
          {category}
        </Box>
      </Box>
    </Link>
  );
};

export default RecipeCard;
