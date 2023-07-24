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
  StepStatus,
} from "@chakra-ui/react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const MenuRecipe = ({
  closable = false,
  title = "Provide Title",
  options = DemoOptions,
  optionType = "radio",
  CSS = null,
  setState,
  wordLimit = 3,
  reset,
  current,
}) => {
  const [titleString, setTitleString] = useState(``);
  const [selectedValues, setSelectedValues] = useState(
    optionType == "checkbox" ? [] : ""
  );
  const [display, setDisplay] = useState("Nothing Selected");

  useEffect(() => {
    setSelectedValues(optionType == "checkbox" ? [] : "");
  }, [reset]);

  useEffect(() => {
    if (optionType == "checkbox") {
      setSelectedValues(current);
    } else {
      if (current == "asc") {
        setSelectedValues("A - Z");
      } else if (current == "desc") {
        setSelectedValues("Z - A");
      } else if (current == "rec") {
        setSelectedValues("Highest Rated");
      } else if (current == "60 mins") {
        setSelectedValues("1 hour or less");
      } else {
        setSelectedValues("");
      }
    }
  }, []);

  useEffect(() => {
    if (optionType == "checkbox") {
      setState((prev) => selectedValues);
      if (selectedValues.length == 0 || selectedValues == "") {
        setDisplay("Nothing Selected");
      } else if (selectedValues.length > wordLimit) {
        setDisplay(`${selectedValues.length} items Selected`);
      } else {
        setDisplay((prev) => {
          let s = "";
          selectedValues.forEach((item, inf) => {
            s += item + ",";
          });
          return s;
        });
      }
    } else {
      setState((prev) => selectedValues);
      if (selectedValues == "") {
        setDisplay("Nothing Selected");
      } else {
        setDisplay(selectedValues);
      }
    }
  }, [selectedValues]);

  useEffect(() => {}, []);

  const handleChange = (value) => {
    setSelectedValues((prev) => {
      return value;
    });
  };

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
            {/* <Text>Nothing selected</Text> */}
            <Text>{display}</Text>

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
          <MenuOptionGroup
            type={optionType}
            value={selectedValues}
            onChange={handleChange}
          >
            {options?.map((item, ind) => (
              <MenuItemOption
                key={title.includes("Ingredients") ? item : item.name + ind}
                bg="bdbg"
                backdropFilter="blur(30px)"
                _hover={{
                  bg: "white",
                }}
                value={title.includes("Ingredients") ? item : item.name}
              >
                {title.includes("Ingredients") ? item : item.name}
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
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: block;
  }
`;
export const MenuB = css`
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
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
