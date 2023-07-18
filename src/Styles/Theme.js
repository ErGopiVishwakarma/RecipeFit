import { extendTheme } from "@chakra-ui/react";

const CustomeTheme = extendTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    darkwhite: "#ffffffb3",
    darkwhite2: "#808080",
    lightblack: "#212529",
    brick: "#b04c35",
    greenblack: "#6a816133",
    darkgreen: "#50684b",
    hovergreen: "#9ab295",
  },
  fonts: {
    hind: "'Hind Vadodara', sans-serif",
    k2d: "'K2D', sans-serif",
    inter: "'Inter', sans-serif",
    cursive: "'Reenie Beanie', cursive",
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
