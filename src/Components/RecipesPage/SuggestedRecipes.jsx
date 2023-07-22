import * as css from "../../Styles/SuggestedAndCommentCss";
import React, { useEffect, useState } from "react";
import { Box, Text, Image, Center, Button } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SuggestedRecipes = ({ recipeData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    document.title = `${recipeData.title} | RecipeSnap`;
    let ar = [];
    for (let a = 0; a < 10; a++) {
      suggested.push(recipeData.img);
    }
    setSuggested((prev) => ar);
    console.log(suggested);
  }, [recipeData]);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, suggested.length - 4));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleMouseMovement = (e) => {
    const delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta > 0) {
      handleNext();
    } else if (delta < 0) {
      handlePrev();
    }
  };

  return (
    <Box css={css.SuggestedOuter}>
      <Text fontFamily="cotorisb" css={css.SuggestedHeader}>
        Suggested recipes
      </Text>
      <Image as={BiChevronLeft} color="gblack" css={css.ArrowCss} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        onWheel={handleMouseMovement}
      >
        {suggested.map((imageUrl, index) => {
          return (
            <Text>{imageUrl}</Text>
            // <img
            //   key={index}
            //   src={imageUrl}
            //   alt={imageUrl + index}
            //   border="1px solid red"
            //   boxSize="100%"
            //   objectFit="cover"
            // />
          );
        })}
      </Box>
      <Image as={BiChevronLeft} color="gblack" css={css.ArrowCss} />
    </Box>
  );
};

export default SuggestedRecipes;
