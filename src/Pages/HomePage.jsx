import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import LatestRecipes from "../Components/Home/LatestRecipes";
import LatestVideo from "../Components/Home/LatestVideo";
import LatestArticles from "../Components/Home/LatestArticles";
import WelcomeFriends from "../Components/Home/WelcomeFriends";
import JoinCommunity from "../Components/Home/JoinCommunity";
import MainCarousals from "../Components/Home/MainCarousal";

const HomePage = () => {
  return (
    <Flex direction={'column'}>
      {/* carousal  */}
      <Flex> 
        <MainCarousals />
      </Flex>
      {/* Latest Recipes  */}
      <LatestRecipes />
      {/* Welcome friends component  */}
      <WelcomeFriends />
      {/* Latest Videos  */}
      <LatestVideo />
      {/* join community component  */}
      <JoinCommunity />
      {/* Latest Aritcles  */}
      <LatestArticles />
    </Flex>
  )
};

export default HomePage;
