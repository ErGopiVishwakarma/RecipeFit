import * as css from "../../Styles/SingleRecipePageCss";
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Input,
  Center,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { SiInstacart } from "react-icons/si";

import React from "react";

const IngAndDirect = ({ recipeData }) => {
  return (
    <Box css={css.IngDirectImagesOuter}>
      {/* Ingredients and Directions */}
      <Box css={css.IngAndDirectCont}>
        {/* Ingredients */}
        <Box bg="dwhite2" css={css.IngredientsCont}>
          <Text fontFamily="cotorisb" css={css.HeadingIngAndDirect}>
            Ingredients
          </Text>
          {recipeData?.ingredients?.map((item, ind) => (
            <CrossableText
              str={`${
                item.quantity ? decimalToFraction(item.quantity) : ""
              } ${fixUnit(item.unit)} ${item.ingredient}`}
              key={item.ingredient + ind}
            />
          ))}
          <Box textAlign="center">
            <Button
              fontFamily="hind"
              bg="greenbtn"
              _hover={{ bg: "greenbtnhover" }}
              css={css.BuyIngButton}
            >
              Get ingredients with <Image as={SiInstacart} /> instacart
            </Button>
          </Box>
        </Box>

        {/* Directions */}
        <Box css={css.DirectCont}>
          <Text fontFamily="cotorisb" css={css.HeadingIngAndDirect}>
            Directions
          </Text>
          <OrderedList>
            {recipeData?.directions?.map((item, ind) => (
              <ListItem key={item + ind}>
                <CrossableText str={item} />
              </ListItem>
            ))}
          </OrderedList>
        </Box>
      </Box>

      {/* Images */}
      <Box>
        {recipeData?.images?.map((item, ind) => (
          <Image
            css={css.RecipeImageStyles}
            src={item}
            alt={ind + 1 + " " + recipeData?.title}
            key={item + ind}
          />
        ))}
      </Box>
    </Box>
  );
};

export default IngAndDirect;

const CrossableText = ({ str }) => {
  const [isCrossed, setIsCrossed] = useState(false);
  const handleTextClick = () => {
    setIsCrossed((prevIsCrossed) => !prevIsCrossed);
  };
  const crossedStyle = {
    textDecoration: "line-through",
  };
  const normalStyle = {
    textDecoration: "none",
  };

  return (
    <Text
      onClick={handleTextClick}
      color={isCrossed ? "gblack" : "lblack"}
      css={isCrossed ? css.CrossedText : css.UncrossedText}
      sx={isCrossed ? crossedStyle : normalStyle}
      cursor="pointer"
      fontFamily="cotoris"
    >
      {str}
    </Text>
  );
};

function fixUnit(unit) {
  if (unit == "tablespoons") {
    return "Tbsp";
  } else if (unit == "teaspoons") {
    return "tsp";
  } else {
    return unit;
  }
}
function findGCD(a, b) {
  return b === 0 ? a : findGCD(b, a % b);
}
function decimalToFraction(decimalNumber) {
  const tolerance = 1.0e-6;
  if (Math.abs(decimalNumber % 1) < tolerance) {
    return decimalNumber;
  }
  let numerator = 1;
  let denominator = 1;
  while (Math.abs(decimalNumber - numerator / denominator) > tolerance) {
    if (decimalNumber > numerator / denominator) {
      numerator++;
    } else {
      denominator++;
    }
    const gcd = findGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;
  }
  return `${numerator}/${denominator}`;
}
