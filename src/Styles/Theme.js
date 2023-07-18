import { extendTheme } from "@chakra-ui/react";

const CustomeTheme = extendTheme({
  colors: {
    primary: "#FF5733",
    secondary: "#007BFF",
  },
  fonts: {
    hind: "'Hind Vadodara', sans-serif",
    k2d: "'K2D', sans-serif",
    inter: "'Inter', sans-serif",
    cotoris: {
      src: "url('./CotorisBold.ttf')",
      fontDisplay: "swap",
      format: "ttf",
    },
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
