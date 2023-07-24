import { useState } from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import SingupPage from "./Pages/SignupPage";
import AllRoutes from "./Routes/AllRoutes";
import {
  Box,
  Link,
  Collapse,
  Text,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <ScrollToTop smooth />
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
