import { extendTheme } from "@chakra-ui/react";

const CustomeTheme = extendTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    dwhite: "#ffffffb3",
    dwhite2: "#808080",
    lblack: "#212529",
    brick: "#b04c35",
    gblack: "#6a816133",
    dgreen: "#50684b",
    hovergreen: "#9ab295",
  },
  fonts: {
    hind: "'Hind Vadodara', sans-serif",
    k2d: "'K2D', sans-serif",
    inter: "'Inter', sans-serif",
    cursive: "'Reenie Beanie', cursive",
    cotoris: "'Alegreya Sans', sans-serif",
  },
});

export default CustomeTheme;

/*

base: < 480px
sm: > 480px
md: > 768px
lg: > 992px
xl: > 1280px

*/
