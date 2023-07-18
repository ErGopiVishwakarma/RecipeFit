import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      {NavOptions.map((item, ind) => (
        <NavLink to={item.to} key={item.name + ind}>
          {item.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default Navbar;

const NavOptions = [
  { to: "/", name: "Home" },
  { to: "/articles", name: "Articles" },
  { to: "/recipes", name: "Recipes" },
];
