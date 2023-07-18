import React, { useState } from "react";
import {
  Box,
  Image,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const RecipePageSearch = () => {
  const [changeBoxShadow, setChangeBoxShadow] = useState(false);

  return (
    <InputGroup
      h={["30px", "35px", "40px", "45px"]}
      w={["75%", "80%", "80%", "700px"]}
      m={["auto"]}
      mt={["-15.5px", "-18px", "-22px", "-24px"]}
      borderRadius={["40px"]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
    >
      <Input
        h={["100%"]}
        border="2px solid"
        outline="none"
        borderRadius={["40px"]}
        fontSize={["13.5px", "15px", "18px", "1.2rem"]}
        color="dgreen"
        borderColor="lblack2"
        _focusVisible="false"
        transition=".3s ease-in-out"
        boxShadow="0 0 0.4rem #64825E"
        _hover={{
          outline: "none",
        }}
        _focus={{
          border: "2px solid",
          boxShadow: "0 0 1rem #64825E",
        }}
        placeholder="Search Recipes"
      />
      <Center>
        <InputRightElement>
          <Image
            onClick={() => console.log("sdgfsdgf")}
            cursor="pointer"
            m={[
              "0px 1px 11px 0px",
              "0px 3px 6px 0px",
              "0px 5px 1px 0px",
              "3px 6px 0px 0px",
            ]}
            fontSize={["13px", "15px", "18px", "18px"]}
            as={BsSearch}
          />
        </InputRightElement>
      </Center>
    </InputGroup>
  );
};

export default RecipePageSearch;
