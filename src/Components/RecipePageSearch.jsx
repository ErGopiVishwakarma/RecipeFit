import React from "react";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const RecipePageSearch = () => {
  return (
    <InputGroup>
      <Input />
      <InputRightElement>
        <Image as={BsSearch} />
      </InputRightElement>
    </InputGroup>
  );
};

export default RecipePageSearch;
