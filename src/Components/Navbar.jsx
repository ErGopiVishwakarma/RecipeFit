import * as css from "../Styles/NavBarCss";
import React, { useEffect, useState } from "react";
import { NavLink,Link as Links} from "react-router-dom";
import {
  Box,
  Link,
  Collapse,
  Image,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import Logo from "./Logo";
import RecipePageSearch from "./RecipesPage/RecipePageSearch";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState(false);
  const [changeBoxShadow, setChangeBoxShadow] = useState(false);

  const height = drawerOpen ? "200px" : "50px";
  const display = drawerOpen ? "block" : "none";

  useEffect(() => {
    if (drawerOpen) {
      setShow((prev) => false);
    } else {
      window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
          setShow(false);
        } else {
          setShow("visible");
        }
      });
    }
  }, [isOpen]);

  return (
    <Box fontFamily="cotorisb" width="100%" color="lblack" bg="bdbg">
      <Box
        h={["65px", "75px", "85px"]}
        bg="bdbg"
        css={
          isOpen
            ? css.NavBarOuter
            : show
              ? css.ScrolledNavOuter
              : css.NavBarOuter
        }
      // css={show ? css.ScrolledNavOuter : css.NavBarOuter}
      >
        {/* Left Icons */}
        <Box css={css.LeftNavCont}>
          <Image
            as={BsSearch}
            css={css.SearchIconCss}
            onClick={() => {
              setDrawerOpen((prev) => false);
              setShowSearch((prev) => !prev);
            }}
          />
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/recipes"            
          >
           <Text css={css.NavLinkCss}> Recipes</Text>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/articles"
            
          >
            <Text css={css.NavLinkCss}>Articles</Text>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/videos"
            
          >
            <Text css={css.NavLinkCss}>Videos</Text>
          </NavLink>
        </Box>

        {/* Logo */}
        <Logo width={["180px", "240px", "265px", "320px"]} height={["100%"]} />

        {/* Right Icons */}
        <Box css={css.RightNavCont}>
          <Link
            style={{
              textDecoration: "none",
            }}
            href="https://github.com/ErGopiVishwakarma/RecipeFit"
            isExternal
            css={css.NavLinkCss}
          >
            App
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href="/shop"
            css={css.NavLinkCss}
          >
            Shop
          </Link>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/about"
            
          >
           <Text css={css.NavLinkCss}> About</Text>
          </NavLink>

          <Image
            display={["none", "none", "block"]}
            as={TfiEmail}
            css={css.SearchIconCss}
          />
          <Image
            display={["block", "block", "none"]}
            as={isOpen ? GrClose : FiMenu}
            onClick={() => {
              onOpen();
            }}
            css={isOpen ? css.MenucloseCss : css.MenuIconCss}
          />
        </Box>
      </Box>

      {/* Menu Drawer */}
      <Drawer
        closeOnEsc
        closeOnOverlayClick
        blockScrollOnMount={false}
        placement={"top"}
        onClose={onClose}
        isOpen={isOpen}
        top="100"
      >
        <DrawerOverlay mt={["65px", "75px", "85px"]} bg="transparent" />
        <DrawerContent
          bg="bdbg"
          mt={["65px", "75px", "85px"]}
          css={css.MenuContentBox}
          fontFamily="cotorisb"
        >
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/recipes"
            css={css.MenuLinkCss}
          >
            Recipes
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/articles"
            css={css.MenuLinkCss}
          >
            Articles
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/videos"
            css={css.MenuLinkCss}
          >
            Videos
          </NavLink>
          <Link
            style={{
              textDecoration: "none",
            }}
            href="https://github.com/ErGopiVishwakarma/RecipeFit"
            isExternal
            css={css.MenuLinkCss}
          >
            App
          </Link>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/shop"
            css={css.MenuLinkCss}
          >
            Shop
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/about"
            css={css.MenuLinkCss}
          >
            About
          </NavLink>
          <Image
            display={["block", "block", "none"]}
            as={TfiEmail}
            css={css.SearchIconCss}
          />
        </DrawerContent>
      </Drawer>

      {/* Search Box */}
      <Collapse in={showSearch} animateOpacity>
        <Box
          mt={["65px", "75px", "85px"]}
          css={show ? css.FadedSearch : css.VisibleSearch}
        >
          <RecipePageSearch />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
