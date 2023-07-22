import React, { useState } from "react";
import { Box, Flex, Image, Heading, Input, useBoolean } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EmailIcon, Search2Icon } from "@chakra-ui/icons";
import "../Styles/navbar.css";

const Navbar = () => {
  const [flag, setFlag] = useBoolean();
  const [show, setShow] = useState("");
  window.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
      setShow("");
    } else {
      setShow("visible");
    }
  });

  return (
    <Box>
      <Box
        w="100%"
        pos={"fixed"}
        zIndex={99}
        px="20px"
        bg="white"
        alignItems={"center"}
        className={show}
      >
        <Flex
          justifyContent={["space-between", "space-between", "space-around"]}
          h="80px"
          alignItems="center"
        >
          <Flex gap={["", "", "20px", "30px"]} alignItems="center">
            <Box onClick={setFlag.toggle}>
              <Search2Icon />
            </Box>
            <Flex
              gap={["", "", "20px", "30px"]}
              fontSize="20px"
              colorScheme="primary"
              display={["none", "none", "flex"]}
            >
              <NavLink>Recipes</NavLink>
              <NavLink to="/articles">Articles</NavLink>
              <NavLink>Videos</NavLink>
            </Flex>
          </Flex>

          <Flex>
            {/* <Image src={icon} w='100px' /> */}
            <Heading>RecipeSnap</Heading>
          </Flex>
          <Flex gap={["", "", "20px", "30px"]} alignItems="center">
            <Flex
              gap={["", "", "20px", "30px"]}
              fontSize="20px"
              display={["none", "none", "flex"]}
            >
              <NavLink>App</NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>About</NavLink>
            </Flex>
            <Box>
              <EmailIcon color="gray" />
            </Box>
          </Flex>
        </Flex>

      </Flex>
    </Box>
  );
};

export default Navbar;
