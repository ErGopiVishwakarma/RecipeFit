import * as css from "../../Styles/SingleRecipePageCss";
import { FiClock } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Box, Text, Image, Button, Input, Center } from "@chakra-ui/react";

const SingleRecipeDetails = ({ setQty, qty, recipeData }) => {
  const handleClick = (val) => {
    setQty((prev) => prev + val);
  };

  return (
    <Box css={css.DetailsCont}>
      <Image src={recipeData?.img} css={css.ImgCss} />

      <Box>
        <Text fontFamily="cotorisb" css={css.Header}>
          {recipeData?.title}
        </Text>

        {/* Badges */}
        <Box css={css.BadgeCont}>
          <Box bg="greenbtn" fontFamily="inter" css={css.TimeBadge}>
            <Image as={FiClock} css={css.TimeIcon} />
            {recipeData?.time}
          </Box>
          <Box fontFamily="inter" bg="redbtn" css={css.CateBadge}>
            {recipeData?.category}
          </Box>
        </Box>

        {/* Description */}
        <Text fontFamily="cotoris" css={css.DescriptionCss}>
          {recipeData?.description}
        </Text>

        {/* Serving Quantity and Time */}
        <Box css={css.QtyAndTimeCont}>
          <Box css={css.ChildOptionsCont}>
            <Text css={css.ChildOptionsText} fontFamily="cotorisb">
              Servings
            </Text>
            <Box css={css.QtyInpAndBtnCont}>
              <Center
                bg="dwhite2"
                fontFamily="cotoris"
                css={css.IncBox}
                onClick={() => handleClick(-1)}
              >
                -
              </Center>
              <Input
                value={qty}
                onChange={(e) => {
                  if (e.target.value < 1) {
                    setQty((prev) => 1);
                  } else {
                    setQty((prev) => e.target.value);
                  }
                }}
                css={css.ServingInpCss}
                type="number"
                _focusVisible="false"
                color="dgreen"
                borderColor="lblack2"
              />
              <Center
                bg="dwhite2"
                fontFamily="cotoris"
                css={css.DecBox}
                onClick={() => handleClick(1)}
              >
                +
              </Center>
            </Box>
          </Box>
          <Box css={css.ChildOptionsCont}>
            <Text css={css.ChildOptionsText} fontFamily="cotorisb">
              Total
            </Text>
            <Text
              fontFamily="cotoris"
              css={css.ChildOptionsLowerText}
            >{`${totaltimegenerator(recipeData?.time)} mins`}</Text>
          </Box>
          <Box css={css.ChildOptionsCont}>
            <Text css={css.ChildOptionsText} fontFamily="cotorisb">
              Prep
            </Text>
            <Text fontFamily="cotoris" css={css.ChildOptionsLowerText}>
              {recipeData?.time}
            </Text>
          </Box>
        </Box>

        {/* Free From */}
        <Box bg="dwhite2" css={css.FreeFromOuter}>
          <Text fontFamily="cotorisb" css={css.FreeFromHeader}>
            Free from
          </Text>
          <Box css={css.FreeFromContainer}>
            <Box css={css.FreeFromIconCard}>
              <Image
                css={css.FreeIconImg}
                alt="soy"
                src="https://www.pickuplimes.com/static/images/allergy_symbols/Soy_icon_v03_200.abfad0d53965.png"
              />
              <Text color="lblack3" fontFamily="cotoris" css={css.FreeFromName}>
                soy
              </Text>
            </Box>
            <Box css={css.FreeFromIconCard}>
              <Image
                css={css.FreeIconImg}
                alt="glutten"
                src="https://www.pickuplimes.com/static/images/allergy_symbols/Gluten_icon_v01_200.e97ca7118e0d.png"
              />
              <Text color="lblack3" fontFamily="cotoris" css={css.FreeFromName}>
                glutten
              </Text>
            </Box>
            <Box css={css.FreeFromIconCard}>
              <Image
                css={css.FreeIconImg}
                alt="tree nut"
                src="https://www.pickuplimes.com/static/images/allergy_symbols/Treenut_icon_v02_200.2d1a524a7944.png"
              />
              <Text color="lblack3" fontFamily="cotoris" css={css.FreeFromName}>
                tree nut
              </Text>
            </Box>
            <Box css={css.FreeFromIconCard}>
              <Image
                css={css.FreeIconImg}
                alt="sesame"
                src="https://www.pickuplimes.com/static/images/allergy_symbols/Sesame_icon_v01_200.6b6fe61f49f8.png"
              />
              <Text color="lblack3" fontFamily="cotoris" css={css.FreeFromName}>
                sesame
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleRecipeDetails;

function totaltimegenerator(time) {
  if (time) {
    let generated = Number(time.split(" ")[0]) + 15;
    return generated;
  } else {
    return 5;
  }
}
