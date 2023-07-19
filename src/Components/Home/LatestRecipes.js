import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { latestRecipes } from "./Dummy.js";

const LatestRecipes = () => {
  return (
    <Flex direction={"column"} alignItems={"start"} px="50px" w="100%">
      <Heading py="30px">Latest Recipe</Heading>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w="100%" gap="30px">
        {latestRecipes?.map((el, ind) => {
          return (
            <Flex
              direction={"column"}
              borderRadius={"10px"}
              alignItems={"start"}
              gap="15px"
            >
              <Image src={el.img} borderRadius={"10px"} />
              <Heading fontSize={"22px"}>{el.title}</Heading>
            </Flex>
          );
        })}
      </Grid>
      <Button bg="red.700" colorScheme="white" m="auto" my="30px">
        more +
      </Button>
    </Flex>
  );
};

export default LatestRecipes;
