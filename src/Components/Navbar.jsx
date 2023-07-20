import React from "react";
import { Box, Flex, Image, Heading, Input, useBoolean } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EmailIcon, Search2Icon } from "@chakra-ui/icons";
import icon from '../Images/Icons/favicon.png'


const Navbar = () => {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <Box w='100%' pos={'fixed'} zIndex={99}>
        <Flex justifyContent='space-evenly' h='80px' alignItems='center' bg='white'>
          <Flex gap='30px'>
            <Box onClick={setFlag.toggle}>
              <Search2Icon />
            </Box>
            <Flex gap='30px' fontSize='20px' colorScheme='primary'>
              <NavLink>Recipes</NavLink>
              <NavLink>Articles</NavLink>
              <NavLink>Videos</NavLink>
            </Flex>
          </Flex>

          <Flex>
            {/* <Image src={icon} w='100px' /> */}
            <Heading>RecipeSnap</Heading>
          </Flex>
          <Flex gap='30px'>
            <Flex gap='30px' fontSize='20px'>
              <NavLink>App</NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>About</NavLink>
            </Flex>
            <Box>
              <EmailIcon color='gray' />
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* search box  */}
      <Flex alignItems={'center'} justifyContent={'center'} bg='green' pt='100px' pb='20px' display={flag?'flex':'none'} w='100%' pos={'fixed'} zIndex={29} >
        <Input w='600px' color='white' bg='white' />
      </Flex>
    </>
  );
};

export default Navbar;
