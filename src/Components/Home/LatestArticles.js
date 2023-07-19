import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LatestArticles = () => {
  return (
    <Flex direction={"column"} alignItems={"start"} px="50px" w="100%">
      <Heading py="30px">Latest aritcles</Heading>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w="100%">
        <Text>gopi</Text>
        <Text>gopi</Text>
        <Text>gopi</Text>
        <Text>gopi</Text>
      </Grid>
    </Flex>
  );
};

export default LatestArticles;
