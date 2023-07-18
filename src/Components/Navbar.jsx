import React from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EmailIcon, Search2Icon } from "@chakra-ui/icons";
import icon from "../Images/Icons/favicon.png";

const Navbar = () => {
  return (
    <Box w="100%">
      <Flex
        justifyContent="space-evenly"
        h="80px"
        alignItems="center"
        bg="white"
      >
        <Flex gap="30px">
          <Box>
            <Search2Icon />
          </Box>
          <Flex gap="30px" fontSize="20px">
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink>Articles</NavLink>
            <NavLink>Videos</NavLink>
          </Flex>
        </Flex>
        <Flex>
          {/* <Image src={icon} w='100px' /> */}
          <Heading>RecipeSnap</Heading>
        </Flex>
        <Flex gap="30px">
          <Flex gap="30px" fontSize="20px">
            <NavLink>App</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>About</NavLink>
          </Flex>
          <Box>
            <EmailIcon />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
