import React, { useState, useEffect } from "react";
import { Box, Center, Image, Collapse, Button, Text } from "@chakra-ui/react";

import MenuRecipe from "./MenuRecipe";

const FilterRecipes = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(true);

  const handleToggle = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <Box mt={["60px"]}>
      <Button
        onClick={handleToggle}
        display={{ base: "block", md: "none" }}
        mb={4}
      >
        Toggle Box
      </Button>

      <Collapse in={isBoxOpen} startingHeight={0} animateOpacity>
        <Box mt={{ base: 4, md: 0 }}>
          {/* Recipe Type - A*/}
          <MenuRecipe
            CSS="A"
            title="Recipe typeA"
            optionType="checkbox"
            options={RecipeTypes}
          />

          <Box
            m="auto"
            maxWidth="70%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Recipe Type - B*/}
            <MenuRecipe
              CSS="B"
              title="Recipe typeB"
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

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              isLoading={false}
              // spinner={<h1>xfvg</h1>}
              loadingText="Submitting"
              spinnerPlacement="end"
            >
              Submit
            </Button>
            <Button
              spinnerPlacement="end"
              // spinner={<h1>xfvg</h1>}
              isLoading={false}
              loadingText="Reseting"
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
