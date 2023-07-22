import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | RecipeSnap";
  }, []);

  return <Box paddingTop={["65px", "75px", "85px"]}>PAGE NOT FOUND</Box>;
};

export default NotFoundPage;
