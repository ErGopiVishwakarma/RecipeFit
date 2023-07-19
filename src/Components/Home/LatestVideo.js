import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { latestVideos } from "./Dummy";

const LatestVideo = () => {
  return (
    <Flex direction={"column"} alignItems={"start"} px="50px" w="100%">
      <Heading py="30px">Latest videos</Heading>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w="100%" gap="30px">
        {latestVideos?.map((el, ind) => {
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
    </Flex>
  );
};

export default LatestVideo;
