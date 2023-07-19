import * as css from "../Styles/FilterRecipeStyles";
import React, { useState, useEffect } from "react";
import {
  useBreakpointValue,
  Box,
  Center,
  Image,
  Collapse,
  Button,
  Text,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

import MenuRecipe from "./MenuRecipe";

const FilterRecipes = () => {
  const forFilterBtn = useBreakpointValue({ base: true, md: false });
  const [isBoxOpen, setIsBoxOpen] = useState(true);
  const [showFilterBtn, setShowFilterBtn] = useState(false);

  useEffect(() => {
    if (forFilterBtn) {
      setIsBoxOpen((prev) => false);
      setShowFilterBtn((prev) => true);
    } else {
      setIsBoxOpen((prev) => true);
      setShowFilterBtn((prev) => false);
    }
  }, [forFilterBtn]);

  useEffect(() => {
    setIsBoxOpen((prev) => true);
  }, []);

  const handleToggle = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <Box css={css.OuterCont}>
      {showFilterBtn && (
        <Button
          rightIcon={<FiFilter />}
          onClick={handleToggle}
          css={css.ToggleBtn}
          bg="greenbtn"
          fontFamily="inter"
          _hover={{ bg: "greenbtnhover" }}
        >
          Filter
        </Button>
      )}

      <Collapse in={isBoxOpen} startingHeight={0} animateOpacity>
        <Box css={css.FilterParentCont}>
          {/* Recipe Type - A*/}
          <MenuRecipe
            CSS="A"
            title="Recipe type"
            optionType="checkbox"
            options={RecipeTypes}
          />

          <Box css={css.FirstFiltersHolder}>
            {/* Recipe Type - B*/}
            <MenuRecipe
              CSS="B"
              title="Recipe type"
              optionType="checkbox"
              options={RecipeTypes}
            />

            {/* Sort */}

            <MenuRecipe
              closable={true}
              optionType="radio"
              title="Sort"
              options={SortOptions}
            />

            {/* Time to Make */}
            <MenuRecipe
              closable={true}
              optionType="radio"
              title="Time to make"
              options={TimeTaken}
            />
          </Box>

          <Box css={css.SecondFiltersHolder}>
            {/* Include Ingredients */}
            <MenuRecipe
              closable={true}
              optionType="radio"
              title="Include Ingredients"
              // options={TimeTaken}
            />

            {/* Exclude Ingredients */}
            <MenuRecipe
              closable={true}
              optionType="radio"
              title="Exclude Ingredients"
              // options={TimeTaken}
            />
          </Box>

          <Box css={css.BtnCont}>
            <Button
              css={css.SubmitBtn}
              // spinner={<h1>xfvg</h1>}
              loadingText="Submitting"
              spinnerPlacement="end"
              bg="greenbtn"
              fontFamily="hind"
              _hover={{ bg: "greenbtnhover" }}
              isLoading={false}
            >
              Submit
            </Button>
            <Button
              isLoading={false}
              css={css.ResetBtn}
              spinnerPlacement="end"
              // spinner={<h1>xfvg</h1>}
              loadingText="Reseting"
              fontFamily="hind"
              bg="redbtn"
              _hover={{ bg: "redbtnhover" }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FilterRecipes;

const RecipeTypes = [
  { name: "Main", value: "main" },
  { name: "Breakfast", value: "breakfast" },
  { name: "Appetizer", value: "appetizer" },
  { name: "Desert", value: "desert" },
  { name: "Soup", value: "soup" },
];

const SortOptions = [
  { name: "A-Z", value: "a-z" },
  { name: "Z-A", value: "z-a" },
  { name: "Highest Rated", value: "rated" },
];

const TimeTaken = [
  { name: "10 minutes or less", value: "10" },
  { name: "15 minutes or less", value: "15" },
  { name: "20 minutes or less", value: "20" },
  { name: "25 minutes or less", value: "25" },
  { name: "30 minutes or less", value: "30" },
  { name: "35 minutes or less", value: "35" },
  { name: "40 minutes or less", value: "40" },
  { name: "1 hour or less", value: "60" },
];
