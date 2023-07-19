import { extendTheme } from "@chakra-ui/react";

const CustomeTheme = extendTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    dwhite: "#ffffffb3",
    dwhite2: "#6a816133",
    bdbg: "rgba(255, 255, 255, 0.629)",
    gblack: "#808080",
    lblack: "#212529",
    lblack2: "#50684B",
    lblack3: "#64825E", // recipe page search box shadow
    brick: "#b04c35",
    dgreen: "#50684b",
    hovergreen: "#9ab295",
    greenbtn: "rgb(0, 157, 0)",
    greenbtnhover: "rgb(8, 184, 8)",
    redbtn: "rgb(214, 63, 7)",
    redbtnhover: "rgb(231, 96, 48)",
  },
  fonts: {
    hind: "'Hind Vadodara', sans-serif",
    k2d200: "'K2D', sans-serif",
    inter: "'Inter', sans-serif",
    cursive: "'Reenie Beanie', cursive",
    cotoris: "'Alegreya Sans', sans-serif",
    cotorisb: "Cotoris W01 Bold",
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
