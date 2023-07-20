import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const JoinCommunity = () => {
  return (
    <Box w="100" bg="gray.200" py="40px">
      <Flex w="60%" m="auto" direction={"column"} alignItems={"start"}>
        <Heading>Join the Community!</Heading>
        <Flex w="100%" py="40px" gap="70px">
          <Flex w="50%" gap="50px">
            <Box>
              <Text
                style={{ writingMode: "vertical-lr" }}
                letterSpacing={"4px"}
                transform="rotate(180deg)"
              >
                Get your jumpstart guide!
              </Text>
            </Box>
            <Box>
              <Image src="https://www.pickuplimes.com/static/images/jumpstart_guide.ea67430a3b52.jpg" />
            </Box>
          </Flex>
          <Flex
            w="50%"
            gap="40px"
            direction={"column"}
            alignItems={"start"}
            textAlign={"start"}
            fontSize={"18px"}
          >
            <Text letterSpacing={"4px"}>Stay in the loop!</Text>
            <Text>
              Sign up for our Newsletter to stay up-to-date with everything Pick
              Up Limes.
            </Text>
            <Text>
              We make videos, recipes, and nutrition articles to make you feel
              excited and supported in introducing more plant-based foods into
              your meals, snacks, desserts, and everything in-between!
            </Text>
            <Button m="auto">learn more</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default JoinCommunity;
