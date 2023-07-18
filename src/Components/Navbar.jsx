import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
