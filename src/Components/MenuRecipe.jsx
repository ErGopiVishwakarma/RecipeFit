import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Image,
  Collapse,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const MenuRecipe = ({
  closable = false,
  title = "Provide Title",
  options = DemoOptions,
  optionType = "radio",
  CSS = null,
}) => {
  const [titleString, setTitleString] = useState(``);

  return (
    <Box
      textAlign="center"
      css={CSS == "A" ? MenuA : CSS == "B" ? MenuB : NotProvided}
    >
      <Text
        fontFamily="cotorisb"
        fontSize="22px"
        fontWeight="600"
        marginBottom="5px"
      >
        {title}
      </Text>
      <Menu closeOnSelect={closable}>
        <MenuButton
          bg="dwhite2"
          borderRadius="7px"
          transition="border-radius 0.3s"
          _hover={{
            borderRadius: "40px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="dgreen"
            minWidth="220px"
            fontSize="15px"
            padding="4px 10px"
            fontFamily="cotoris"
          >
            <Text>Nothing selected</Text>
            <Image as={BsFillCaretDownFill} fontSize="12px" />
          </Box>
        </MenuButton>
        <MenuList
          minWidth="220px"
          overflowY="scroll"
          maxH="250px"
          fontSize="15px"
          fontFamily="cotoris"
          overflowX="hidden"
          borderRadius="7px"
          transition="border-radius 0.3s"
          _hover={{
            borderRadius: "18px",
          }}
          bg="bdbg"
          backdropFilter="blur(30px)"
        >
          <MenuOptionGroup type={optionType}>
            {options?.map((item, ind) => (
              <MenuItemOption
                key={item.name + ind}
                bg="bdbg"
                backdropFilter="blur(30px)"
                _hover={{
                  bg: "white",
                }}
                value={item.value}
              >
                {item.name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuRecipe;

const DemoOptions = [
  { name: "First Option", value: "firstoption" },
  { name: "Second Option", value: "secondoption" },
  { name: "Third Option", value: "thirdoption" },
  { name: "Fourth Option", value: "fourthoption" },
  { name: "Fifth Option", value: "fifthoption" },
  { name: "Sixth Option", value: "sixthoption" },
];

export const MenuA = css`
  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenuB = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const NotProvided = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
