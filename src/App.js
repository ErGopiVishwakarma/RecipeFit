import "./App.css";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
